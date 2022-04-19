import { useState } from "react";
import styles from "./informalEd.module.scss";
import InformalEdItem from "./InformalEdItem";
import { HiInformationCircle } from "react-icons/hi";
import ImportantMessage from "../../UI/ImportantMessage";

import { informalEdData } from "../../../data/resumeDataApplied";
const InformalEd = () => {
  const [activeId, setActiveId] = useState();

  const toggleActive = (id) => {
    if (activeId === id) {
      setActiveId();
    } else {
      setActiveId(id);
    }
  };

  return (
    <div className={styles.informalEdContainer}>
      <div className={styles.titleOuter}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>Informal Education</p>
          <ImportantMessage
            text={`Nowadays, the internet is a fertile breading ground for the curious learner. Thanks to the GDPR, I have been able to track all the time I spent studying on certain platforms.`}
            customClassText={styles.hiddenText}
            icon={<HiInformationCircle />}
          />
        </div>
      </div>

      <div className={styles.itemsContainer}>
        {informalEdData.map((item, index) => (
          <div
            className={styles.item}
            key={index}
            onClick={() => toggleActive(index)}
          >
            <InformalEdItem
              data={item}
              active={activeId === index ? true : false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InformalEd;
