import React, { useState } from "react";
import { GlobalStyle } from "./pages/mainFolder/globalStyle";
import { Main } from "./pages/mainFolder/main";
import { AppRoutes } from "./routes";
import { AuthProvider } from "./pages/authContext/AuthContext";

export function App() {
  const initialUserState = localStorage.getItem("isLoggedIn") === "true";
  const [isLoggedIn, setIsLoggedIn] = useState(initialUserState);

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  return (
    <AuthProvider>
      <React.StrictMode>
        <>
          <GlobalStyle />
          <AppRoutes isLoggedIn={isLoggedIn} onAuthButtonClick={handleLogin}>
            <Main />
          </AppRoutes>
        </>
      </React.StrictMode>
    </AuthProvider>
  );
}
