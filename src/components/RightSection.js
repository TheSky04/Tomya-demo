import classes from "../classes/RightSection.module.css";
import News from "./News";

const RightSection = () => {
  return (
    <div className={classes.rightSection}>
      <h1>Basında Biz</h1>
      <hr className={classes.hr}></hr>
      <h3>Tomya'yla Geçmişten Geleceğe Tüm Haberler</h3>
      <News
        resume="https://www.ntv.com.tr/ekonomi/acun-ilicalinin-takimi-hull-citye-turk-kripto-para-borsasi-sponsor-oldu,CBhWWEMGu0aWXMIzJp4xNw"
        title=" Acun Ilıcalı'nın takımı Hull City'e Türk kripto para borsası sponsor
        oldu."
        image="https://www.tomya.com/assets/img/bulletin/acun.png"
      />
      <News
        resume="https://www.donanimhaber.com/tomya-borsasindan-surpriz--150541"
        title=" Tomya borsası Hull City formasına sponsor oldu."
        image="https://www.tomya.com/assets/img/bulletin/hullcity.png"
      />
      <News
        resume="http://www.gazeteekonomi.com/ekonomi-finans/ece-pulas-a-yeni-gorev-h585590.html"
        title=" Ece Pulaş'a yeni görev"
        image="https://www.tomya.com/assets/img/bulletin/ece-pulas.png"
      />
      <News
        resume="https://www.dunya.com/sirketler/tomyanin-yeni-genel-mudur-yardimcisi-ece-pulas-oldu-haberi-663211"
        title=" Tomya'nın yeni Genel Müdür Yardımcısı Ece Pulaş oldu"
        image="https://www.tomya.com/assets/img/bulletin/ece-pulas.png"
      />
      <News
        resume="https://www.ntv.com.tr/ekonomi/kripto-borsasi-tomya-yatirimcilarin-platform-secerken-dikkatli-olmasi-gerekiyor,WgLFz9vpd0iqrHIcJ45uIQ"
        title="Kripto borsası TOMYA: 'Yatırımcıların platform seçerken dikkatli olması gerekiyor'"
        image="https://www.tomya.com/assets/img/bulletin/halilbedir.png"
      />
      <News
        resume="https://uzmancoin.com/kripto-para-tomya-afsar-akal/"
        title="Tomya CEO’su Afşar Akal: Kesintisiz hizmet sunmayı ilke edindik"
        image="https://www.tomya.com/assets/img/bulletin/afsar-akal.png"
      />
    </div>
  );
};

export default RightSection;
