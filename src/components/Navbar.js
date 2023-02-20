import "../classes/Navbar.css";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Crypto from "./Crypto";
import { useState } from "react";

const Navbar = (props) => {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    if (clicked) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  };

  const mouseOverHandler = (e) => {
    if (e.target.classList.contains("navLink")) {
      const link = e.target;
      const siblings = link.closest(".nav").querySelectorAll(".navLink");

      siblings.forEach((el) => {
        if (el !== link) {
          el.style.opacity = 0.5;
        } else {
          el.style.opacity = 1;
        }
      });
    }
  };

  const mouseOutHandler = (e) => {
    if (e.target.classList.contains("navLink")) {
      const link = e.target;
      const siblings = link.closest(".nav").querySelectorAll(".navLink");

      siblings.forEach((el) => {
        if (el !== link) {
          el.style.opacity = 1;
        }
      });
    }
  };

  return (
    <>
      <nav
        className="nav"
        onMouseOver={mouseOverHandler}
        onMouseOut={mouseOutHandler}
      >
        <ul className="list">
          <li className="cryptoDetail" onClick={clickHandler}>
            <a href="#" className="navLink">
              <span>Kripto Paralar</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </a>
          </li>
          <li>
            <a href="#" className="navLink">
              Market
            </a>
          </li>
          <li>
            <a href="#" className="navLink">
              Komisyonlar
            </a>
          </li>
          <li>
            <a href="#" className="navLink">
              Hakkımızda
            </a>
          </li>
          <li>
            <a href="#" className="navLink">
              Basında Biz
            </a>
          </li>
          <li>
            <a href="#" className="navLink">
              Duyurular
            </a>
          </li>
          <li>
            <a href="#" className="navLink">
              İletişim
            </a>
          </li>
          <li>
            <a href="#" className="navLink">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="navLink login">
              Giriş Yap
            </a>
          </li>
          <li>
            <a href="#" className="navLink">
              Kayıt Ol
            </a>
          </li>
        </ul>

        {clicked && <Crypto />}
      </nav>
      <button className="btn-mobile-nav" onClick={props.onOpenMenu}>
        <FontAwesomeIcon
          icon={faBars}
          name="menu-outline"
          className="icon-mobile-nav"
        />
        <FontAwesomeIcon
          icon={faXmark}
          name="close-outline"
          className="icon-mobile-nav"
        />
      </button>
    </>
  );
};

export default Navbar;
