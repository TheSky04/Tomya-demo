import classes from "../classes/LeftSection.module.css";

const LeftSection = () => {
  return (
    <div className={classes.container}>
      <ul>
        <li>
          <a href="#">Sıkça Sorulan Sorular</a>
        </li>
        <li>
          <a href="#">Kripto Hesaplayıcı</a>
        </li>
        <li>
          <a href="#">Kripto Sözlük</a>
        </li>
        <li>
          <a href="#">Basında Biz</a>
        </li>
        <li>
          <a href="#">Duyurular</a>
        </li>
        <li>
          <a href="#">Limitler</a>
        </li>
        <li>
          <a href="#">Para Yatırma ve Çekme Platformları</a>
        </li>
        <li>
          <a href="#">Kara Parayı Aklamayı Önleme Politikası</a>
        </li>
        <li>
          <a href="#">Müşterini Tanı (KYC) Politikası</a>
        </li>
      </ul>
    </div>
  );
};

export default LeftSection;
