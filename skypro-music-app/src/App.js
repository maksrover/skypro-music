import { GlobalStyle } from "./pages/mainFolder/globalStyle";
import { Main } from "./pages/mainFolder/main";
import { useState } from "react";
import { AppRoutes } from "./routes";

export function App() {
  const initialUserState = localStorage.getItem("token") !== null;
  const [isLoggedIn, setIsLoggedIn] = useState(initialUserState);

  const handleLogin = () => {
    localStorage.setItem("token", "true");
    setIsLoggedIn(true);
  };

  return (
    <>
      <GlobalStyle />
      <AppRoutes isLoggedIn={isLoggedIn} onAuthButtonClick={handleLogin}>
        <Main />
      </AppRoutes>
    </>
  );
}
