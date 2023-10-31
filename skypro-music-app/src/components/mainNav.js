import { useState } from "react";
import logo from "../img/logo.png";
import Burger from "./burger";
import BurgerMenu from "./burgerMenu";

function MainNav() {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);

  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src={logo} alt="logo" />
      </div>
      <Burger onClick={toggleVisibility} />
      {visible && <BurgerMenu />}
    </nav>
  );
}

export default MainNav;
