import { createContext, useState, useContext, useEffect } from "react";
import { getToken, setToken, removeToken } from "./utils/localStorage";
import { Link } from "react-router-dom";

const AuthContext = createContext(); // Crete a context object which holds the shared state

// Wraps useContext(AuthContext) into simple hook for cleaner import
// Is destructured so individual pieces of state can be accessed and updated
const useAuth = () => useContext(AuthContext);

// Defines the state and functions which are made available to children via AuthContext.provider
// This is what other components get wrapped in in order to "pass" them the state at a high level
const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = getToken();
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const login = (token) => {
    setToken(token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    removeToken();
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
