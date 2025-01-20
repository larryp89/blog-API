import { createContext, useState, useContext, useEffect } from "react";
import {
  getUserDetails,
  setUserDetails,
  removeUserDetails,
} from "./utils/localStorage";

const UserContext = createContext();

const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check local storage for user details on load
  useEffect(() => {
    const storedUser = getUserDetails();
    // If there is a user, set the user with details
    if (storedUser) {
      setUser({
        ...user,
        username: storedUser.username,
        userID: storedUser.userID,
      });
    }
  }, []);

  const storeUser = (newUser) => {
    if (newUser) {
      setUser(newUser);
      setUserDetails(newUser);
    }
  };

  const removeStoredUser = () => {
    removeUserDetails();
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, storeUser, removeStoredUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { useUser, UserProvider };
