import CategoryComponent from "./CategoryComponent";
import styles from "./classical.module.scss";
import { classicalData } from "../../data/resumeDataApplied";
import Achievements from "./Personal/Achievements";
import InformalEd from "./Personal/InformalEd";
import Profile from "./Profile/Profile";

const ClassicalHome = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.profile}>
        <Profile />
      </div>
      <div className={styles.experience}>
        <CategoryComponent
          title="Experience"
          data={classicalData.experience}
          subcat={false}
        />
      </div>
      <div className={styles.education}>
        <CategoryComponent
          title="Education"
          data={classicalData.education}
          subcat={false}
        />
      </div>

      <div className={styles.containerPersonal}>
        <div className={styles.personalItem}>
          <Achievements />
        </div>

        <div className={styles.personalItem}>
          <InformalEd />
        </div>
      </div>
    </div>
  );
};

export default ClassicalHome;
