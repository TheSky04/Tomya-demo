import classes from "../classes/Crypto.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";

const Crypto = () => {
  return (
    <div className={classes.crypto}>
      <h1>Kripto Paralar</h1>
      <hr className={classes.hr} />
      <div className={classes.coins}>
        <div className={classes.col}>
          <div className={classes.flex}>
            <FontAwesomeIcon icon={faBitcoin} className={classes.icon} />
            <a href="#">Bitcoin</a>
          </div>
          <div className={classes.flex}>
            <FontAwesomeIcon icon={faBitcoin} className={classes.icon} />
            <a href="#">Chainlink</a>
          </div>
          <div className={classes.flex}>
            <FontAwesomeIcon icon={faBitcoin} className={classes.icon} />
            <a href="#">Chiliz</a>
          </div>
          <div className={classes.flex}>
            <FontAwesomeIcon icon={faBitcoin} className={classes.icon} />
            <a href="#">Decentraland</a>
          </div>
          <div className={classes.flex}>
            <FontAwesomeIcon icon={faBitcoin} className={classes.icon} />
            <a href="#">Polygon</a>
          </div>
          <div className={classes.flex}>
            <FontAwesomeIcon icon={faBitcoin} className={classes.icon} />
            <a href="#">Uniswap</a>
          </div>
          <div className={classes.flex}>
            <FontAwesomeIcon icon={faBitcoin} className={classes.icon} />
            <a href="#">THORChain</a>
          </div>
        </div>
        <div className={classes.col}>
          <div className={classes.flex}>
            <FontAwesomeIcon icon={faBitcoin} className={classes.icon} />
            <a href="#">Ethereum</a>
          </div>
          <div className={classes.flex}>
            <FontAwesomeIcon icon={faBitcoin} className={classes.icon} />
            <a href="#">Polkadot</a>
          </div>
          <div className={classes.flex}>
            <FontAwesomeIcon icon={faBitcoin} className={classes.icon} />
            <a href="#">Holochain</a>
          </div>
          <div className={classes.flex}>
            <FontAwesomeIcon icon={faBitcoin} className={classes.icon} />
            <a href="#">The Sandbox</a>
          </div>
          <div className={classes.flex}>
            <FontAwesomeIcon icon={faBitcoin} className={classes.icon} />
            <a href="#">Near Protocol</a>
          </div>
          <div className={classes.flex}>
            <FontAwesomeIcon icon={faBitcoin} className={classes.icon} />
            <a href="#">Fantom</a>
          </div>
          <div className={classes.flex}>
            <FontAwesomeIcon icon={faBitcoin} className={classes.icon} />
            <a href="#">Ethereum Classic</a>
          </div>
        </div>
        <div className={classes.col}>
          <div className={classes.flex}>
            <FontAwesomeIcon icon={faBitcoin} className={classes.icon} />
            <a href="#">Ripple</a>
          </div>
          <div className={classes.flex}>
            <FontAwesomeIcon icon={faBitcoin} className={classes.icon} />
            <a href="#">Dogecoin</a>
          </div>
          <div className={classes.flex}>
            <FontAwesomeIcon icon={faBitcoin} className={classes.icon} />
            <a href="#">BitTorrent Chain</a>
          </div>
          <div className={classes.flex}>
            <FontAwesomeIcon icon={faBitcoin} className={classes.icon} />
            <a href="#">Pancakeswap</a>
          </div>
          <div className={classes.flex}>
            <FontAwesomeIcon icon={faBitcoin} className={classes.icon} />
            <a href="#">PAX Gold</a>
          </div>
          <div className={classes.flex}>
            <FontAwesomeIcon icon={faBitcoin} className={classes.icon} />
            <a href="#">Enjin Coin</a>
          </div>
          <div className={classes.flex}>
            <FontAwesomeIcon icon={faBitcoin} className={classes.icon} />
            <a href="#">Oasis Network</a>
          </div>
        </div>
        <div className={classes.col}>
          <div className={classes.flex}>
            <FontAwesomeIcon icon={faBitcoin} className={classes.icon} />
            <a href="#">Litecoin</a>
          </div>
          <div className={classes.flex}>
            <FontAwesomeIcon icon={faBitcoin} className={classes.icon} />
            <a href="#">Cardano</a>
          </div>
          <div className={classes.flex}>
            <FontAwesomeIcon icon={faBitcoin} className={classes.icon} />
            <a href="#">Avalanche</a>
          </div>
          <div className={classes.flex}>
            <FontAwesomeIcon icon={faBitcoin} className={classes.icon} />
            <a href="#">Shiba Inu</a>
          </div>
          <div className={classes.flex}>
            <FontAwesomeIcon icon={faBitcoin} className={classes.icon} />
            <a href="#">ApeCoin</a>
          </div>
          <div className={classes.flex}>
            <FontAwesomeIcon icon={faBitcoin} className={classes.icon} />
            <a href="#">veChain</a>
          </div>
        </div>
        <div className={classes.col}>
          <div className={classes.flex}>
            <FontAwesomeIcon icon={faBitcoin} className={classes.icon} />
            <a href="#">Tether</a>
          </div>
          <div className={classes.flex}>
            <FontAwesomeIcon icon={faBitcoin} className={classes.icon} />
            <a href="#">NEO</a>
          </div>
          <div className={classes.flex}>
            <FontAwesomeIcon icon={faBitcoin} className={classes.icon} />
            <a href="#">Binance Coin</a>
          </div>
          <div className={classes.flex}>
            <FontAwesomeIcon icon={faBitcoin} className={classes.icon} />
            <a href="#">Solana</a>
          </div>
          <div className={classes.flex}>
            <FontAwesomeIcon icon={faBitcoin} className={classes.icon} />
            <a href="#">Cosmos</a>
          </div>
          <div className={classes.flex}>
            <FontAwesomeIcon icon={faBitcoin} className={classes.icon} />
            <a href="#">Curve DAO</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crypto;
