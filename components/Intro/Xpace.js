import styles from "./Xpace.module.scss";
import Button from "../../global/Button/Button";

const Xpace = () => {
  return (
    <div className={styles.intro}>
      <article className={styles._first_intro}>
        <div className={styles._intro_data}>
          <h1 className={styles._title}>
            We think NFT communities are like guilds in MMORPG games. This is why we are building a bank for metaverse!
          </h1>


        </div>
      </article>

    </div>
  );
};

export default Xpace;
