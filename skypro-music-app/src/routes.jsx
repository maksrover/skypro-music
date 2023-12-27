import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/mainFolder/main";
import { Favorites } from "./pages/Favorites/Favorites";
import { Category } from "./pages/Category/Category";
import { NotFound } from "./pages/NotFound/NotFound";

import { ProtectedRoute } from "./components/protected-route/protected";
import { useState } from "react";

import AuthPage from "./pages/authPage/authPage";
import { AuthProvider } from "./pages/authContext/AuthContext";

import { ThemeContext, themes } from "./pages/Theme/ThemeContext";

export const AppRoutes = () => {
  const [currentTheme, setCurrentTheme] = useState(themes.dark);

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light);
      return;
    }

    setCurrentTheme(themes.dark);
  };

  return (
    <AuthProvider>
      <ThemeContext.Provider value={{ toggleTheme, theme: currentTheme }}>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Main />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/category/:id" element={<Category />} />
          </Route>
          <Route path="/login" element={<AuthPage isLoginMode={true} />} />
          <Route path="/register" element={<AuthPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeContext.Provider>
    </AuthProvider>
  );
};
