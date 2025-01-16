import { getToken } from "../utils/localStorage";
import { useAuth } from "../authContext";

class ApiClient {
  constructor() {
    this.baseURL = "http://localhost:3000/api";
    this.defaultHeaders = {
      "Content-Type": "application/json",
    };
  }

  // Helper to get auth header
  getAuthHeaders() {
    const token = getToken();
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  // Helper to handle responses
  async handleResponse(response) {
    // Handle token expiration
    if (response.status === 401 || response.status === 403) {
      // Let the caller know authentication failed
      throw new Error("Authentication failed");
    }

    // Parse JSON response
    const data = await response.json();

    // Handle unsuccessful responses
    if (!response.ok) {
      throw new Error(data.error || "An error occurred");
    }

    return data;
  }

  // Generic request method
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
      // Log error for debugging
      console.error(`API request failed: ${endpoint}`, error);
      throw error;
    }
  }

  // HTTP method helpers
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

// Create and export a single instance
const apiClient = new ApiClient();
export default apiClient;
