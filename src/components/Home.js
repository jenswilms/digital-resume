import ClassicalHome from "./classical/ClassicalHome";
import GeneralInfo from "./General/GeneralInfo";
import Welcome from "./Welcome/Welcome";
import styles from "./home.module.scss";
const Home = () => {
  return (
    <div className={styles.all}>
      <div className={styles.general}>
        <GeneralInfo />
      </div>
      <div className={styles.header}>
        {/* <p>Switch here to Modern/Classical</p> */}
      </div>
      {/* Home */}
      <div className={styles.intro}>
        <Welcome />
        {/* <p className={styles.title}>
          Welcome to the digital resume of Jens Wilms.
        </p> */}
      </div>

      <div className={styles.main}>
        <ClassicalHome />
      </div>
    </div>
  );
};

export default Home;
