import logoImage from "../assets/tomya-logo.png";
import "../classes/Header.css";
import Navbar from "./Navbar";
import HeaderDetail from "./HeaderDetail";

const Header = (props) => {
  const clickHandler = () => {
    const headerEl = document.querySelector(".header");
    headerEl.classList.toggle("nav-open");
  };

  return (
    <>
      <header className="header">
        <div className="top">
          <img src={logoImage} alt="Tomya Logo" />
          <Navbar onOpenMenu={clickHandler} />
        </div>
        <HeaderDetail />
      </header>
    </>
  );
};

export default Header;
