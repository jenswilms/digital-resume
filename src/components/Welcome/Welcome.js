import styles from "./welcome.module.scss";

import { CgScrollV } from "react-icons/cg";

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <div className={styles.pictureContainer}>
        <div className={styles.picture}></div>
      </div>
      <div className={styles.container}>
        <p className={styles.subtitle}>Hey, it's me</p>
        <p className={styles.title}>Jens Wilms.</p>
        <p className={styles.welcomeText}>
          I'm an entrepreneur, software developer, and learning junkie, with a
          masters degree in anthropology. Driven by curiosity and a love for
          building cool things, I once had an idea for digitalizing the CV.
        </p>

        <div className={styles.switchModes}></div>
        <button className={`buttonYellow ${styles.button}`}>
          <CgScrollV />
          <p>Scroll to see my resume</p>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
