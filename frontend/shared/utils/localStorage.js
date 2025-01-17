const setToken = (token) => {
  try {
    localStorage.setItem("authToken", token);
  } catch (err) {
    console.log("Error saving token to local storage", err);
  }
};

const getToken = () => {
  try {
    const value = localStorage.getItem("authToken");
    return value;
  } catch (err) {
    console.error("Error retrieving authToken from local storage", err);
    return null;
  }
};

const removeToken = () => {
  try {
    localStorage.removeItem("authToken");
  } catch (err) {
    console.error("Error removing authToken from local storage", err);
  }
};

const setUserDetails = (user) => {
  try {
    localStorage.setItem("userDetails", JSON.stringify(user));
  } catch (err) {
    console.log("Error saving user details to local storage", err);
  }
};

const getUserDetails = () => {
  try {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    return userDetails;
  } catch (err) {
    console.error("Error retrieving user details from local storage", err);
    return null;
  }
};

const removeUserDetails = () => {
  try {
    localStorage.removeItem("userDetails");
  } catch (err) {
    console.error("Error removing user details from local storage", err);
  }
};

export {
  setToken,
  getToken,
  removeToken,
  setUserDetails,
  getUserDetails,
  removeUserDetails,
};
