import { useState, useEffect } from "react";

import styles from "./informalEd.module.scss";

const InformalEdItem = ({ data, active }) => {
  const timeAmount = active
    ? Math.round(data.totalDuration / 6) / 10
    : data.totalDuration;
  const timeUnit = active ? "hrs" : "min";

  return (
    <div className={active ? styles.activeItem : ""}>
      <div className={styles.itemHeader}>
        <div className={styles.minContainer}>
          <div className={styles.circleContainer}>
            <p className={styles.totalMinutes}>{timeAmount}</p>
            <p className={styles.minLabel}>{timeUnit}</p>
          </div>
        </div>
        <p className={styles.category}>{data.category}</p>
      </div>
      <div className={`${styles.itemHidden} ${active ? "" : "hidden"}`}>
        <div className={styles.hiddenArrow}></div>
        <div className={styles.hiddenContainer}>
          <p className={styles.description}>{data.description}</p>
          <div className={styles.platforms}>
            {data.platforms.map((item, index) => (
              <div className={styles.platformItem} key={index}>
                <p>
                  {item.platform}: {item.duration}min
                </p>
                {item.amountVideos && <p>{item.amountVideos} unique videos</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformalEdItem;
