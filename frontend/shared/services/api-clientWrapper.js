import { getToken } from "../utils/localStorage";

class ApiError extends Error {
  constructor(message, status, errors = []) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.errors = errors;
  }
}

class ApiClient {
  constructor() {
    this.baseURL =
      process.env.REACT_APP_API_BASE_URL || "http://localhost:3000/api";
    this.defaultHeaders = {
      "Content-Type": "application/json",
    };
  }

  getAuthHeaders() {
    const token = getToken();
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  async handleResponse(response) {
    const data = await response.json().catch(() => ({}));

    if (response.status === 401 || response.status === 403) {
      throw new ApiError("Authentication failed", response.status);
    }

    if (response.status === 400) {
      throw new ApiError(
        data.error || "Invalid details",
        response.status,
        data.messages || [],
      );
    }

    if (!response.ok) {
      throw new ApiError(data.error || "An error occurred", response.status);
    }

    return data;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const headers = {
      ...this.defaultHeaders,
      ...this.getAuthHeaders(),
      ...options.headers,
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers,
        mode: "cors",
      });

      return await this.handleResponse(response);
    } catch (error) {
      console.error(`API request failed: ${endpoint}`, error);
      throw error;
    }
  }

  async get(endpoint) {
    return this.request(endpoint, { method: "GET" });
  }

  async post(endpoint, data) {
    return this.request(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async put(endpoint, data) {
    return this.request(endpoint, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  }

  async delete(endpoint, data) {
    return this.request(endpoint, {
      method: "DELETE",
      body: JSON.stringify(data),
    });
  }
}

const apiClient = new ApiClient();
export default apiClient;
