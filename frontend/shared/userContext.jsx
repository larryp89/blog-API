import { createContext, useState, useContext, useEffect } from "react";
import { getUserDetails } from "./utils/localStorage";

const UserContext = createContext();

const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ username: "", userID: null });

  useEffect(() => {
    const user = getUserDetails();
    if (user) {
      setUser(user);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { useUser, UserProvider };
