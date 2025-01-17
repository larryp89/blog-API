import { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { useUser, UserProvider };
