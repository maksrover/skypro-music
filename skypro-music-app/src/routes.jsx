import { Routes, Route } from "react-router-dom";

import { Main } from "./pages/mainFolder/main";
import { MyTracks } from "./pages/myTracks/myTracks";
import { PlaylistOfTheDay } from "./pages/compilations/playlistOfTheDay";
import { DanceHits } from "./pages/compilations/DanceHits";
import { IndieCharge } from "./pages/compilations/indieCharge";
import { ProtectedRoute } from "./pages/protected/protected";
import { NotFound } from "./pages/404/NotFound";

import AuthPage from "./pages/authPage/authPage";
import { AuthProvider } from "./pages/authContext/AuthContext";

export const AppRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Main />} />
          <Route path="/favorites" element={<MyTracks />} />
          <Route path="/category/:id" element={<PlaylistOfTheDay />} />
          <Route path="/category/:id" element={<DanceHits />} />
          <Route path="/category/:id" element={<IndieCharge />} />
        </Route>
        <Route path="/login" element={<AuthPage isLoginMode={true} />} />
        <Route path="/register" element={<AuthPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
};
