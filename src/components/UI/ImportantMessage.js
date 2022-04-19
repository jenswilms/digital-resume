// import CategoryComponent from "./CategoryComponent";
import { useState } from "react";
import { FALSE } from "sass";

import styles from "./importantMessage.module.scss";

const ImportantMessage = ({ text, icon, customClassText }) => {
  const [infoShown, setInfoShown] = useState(false);
  const [clickedInfo, setClickedInfo] = useState(false);

  return (
    <div className={styles.mainContainer}>
      <div
        className={styles.iconContainer}
        onMouseEnter={() => setInfoShown(true)}
        onMouseLeave={() => setInfoShown(false)}
        onClick={() => setClickedInfo(!clickedInfo)}
      >
        {icon}
      </div>
      {(infoShown || clickedInfo) && (
        <div className={`${styles.infoText} ${customClassText}`}>
          <p>{text}</p>
        </div>
      )}

      <div
        className={`${styles.shade} ${
          infoShown || clickedInfo ? styles.shadeShown : styles.shadeHidden
        }`}
        onClick={() => setClickedInfo(false)}
      ></div>
    </div>
  );
};

export default ImportantMessage;
