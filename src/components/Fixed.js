import classes from "../classes/Fixed.module.css";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const Fixed = () => {
  return (
    <>
      <div className={classes.whatsapp}>
        <FontAwesomeIcon icon={faWhatsapp} className={classes.whatsappIcon} />
      </div>
      <div className={classes.kvk}>
        <p>
          KVKK'nın Veri Sorumlusunun Aydınlatma Yükümlülüğü Başlıklı 10. Maddesi
          uyarınca, gizlilik politikasında belirtilen amaçlarla,
          <span className={classes.bold}>kabul etmeniz dahilinde</span>, sınırlı
          olarak mevzuata uygun çerezler (cookies) kullanılacaktır.
        </p>
        <button>Kabul et</button>
      </div>
      <div className={classes.help}>
        <div className={classes.welcome}>
          <p>Hoşgeldiniz</p>
          <p>Size nasıl yardımcı olabiliriz ?</p>
        </div>
        <div className={classes.iconContainer}>
          <FontAwesomeIcon icon={faMessage} className={classes.icon} />
        </div>
      </div>
    </>
  );
};

export default Fixed;
