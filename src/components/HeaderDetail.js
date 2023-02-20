import classes from "../classes/HeaderDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faBell } from "@fortawesome/free-solid-svg-icons";

const HeaderDetail = () => {
  return (
    <div className={classes.headerDetail}>
      <FontAwesomeIcon icon={faBell} className={classes.icon} />
      <span>Planlı Bakım Çalışması</span>
      <a href="#">
        <span>Devamını Oku</span>
        <FontAwesomeIcon icon={faAnglesRight} className={classes.icon2} />
      </a>
    </div>
  );
};

export default HeaderDetail;
