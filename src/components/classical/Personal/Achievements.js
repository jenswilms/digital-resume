import styles from "./personal.module.scss";
import { achievements } from "../../../data/resumeData";
import { AiFillYoutube } from "react-icons/ai";

const Achievements = () => {
  const getIcon = (type) => {
    if (type === "youtube") {
      return <AiFillYoutube />;
    }
  };
  return (
    <div className={styles.achievementsContainer}>
      <p className={styles.title}>Achievements</p>

      <ul className={styles.achievementsList}>
        {achievements.map((achievement, index) => (
          <li key={index}>
            <div className={styles.liContainer}>
              <p>{achievement.title}</p>
              {achievement.link && (
                <a href={achievement.link} target="_blank" rel="noreferrer">
                  {getIcon(achievement.linkType)}
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;
