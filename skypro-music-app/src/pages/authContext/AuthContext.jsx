import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllTrack, getPauseTrack, getTracksListShuffled } from "./slice";

export const AuthContext = createContext(null);

function getAuthFromLocalStorege() {
  try {
    const auth = JSON.parse(localStorage.getItem("auth"));

    return auth;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(getAuthFromLocalStorege());

  const dispatch = useDispatch();

  const login = (newUser) => {
    setUser(newUser);
    localStorage.setItem("auth", JSON.stringify(newUser));
    const myValue = localStorage.getItem("auth");
    console.log(JSON.parse(myValue));
    navigate("/");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth");
    navigate("/login");
    dispatch(getAllTrack(false));
    dispatch(getPauseTrack(false));
    dispatch(getTracksListShuffled(false));
  };

  return (
    <AuthContext.Provider value={{ login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};
