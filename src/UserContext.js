import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children, initialUser }) => {
    const [user, setUser] = useState(initialUser);

    // console.log(user);

    const handleLogin = (userData) => {
      // console.log('Logging in:', userData.username);
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
    };

    const handleLogout = () => {
      setUser(null);
      localStorage.removeItem('user');
    };

    return (
      <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
        {children}
      </UserContext.Provider>
    );
  };
