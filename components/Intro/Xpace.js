import styles from "./Xpace.module.scss";
import Button from "../../global/Button/Button";

const Xpace = () => {
  return (
    <div className={styles.intro}>
      <article className={styles._first_intro}>
        <div className={styles._intro_data}>
          <h1 className={styles._title}>
            This is a <b>FREE</b> mint collection. Holders will have access to the first virtual bank in the metaverse.
          </h1>

        </div>
      </article>

    </div>
  );
};

export default Xpace;
