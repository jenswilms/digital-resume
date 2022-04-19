import { useState } from "react";
import styles from "./item.module.scss";
import {
  HiOutlineLocationMarker,
  HiInformationCircle,
  HiGlobeAlt,
} from "react-icons/hi";

import { MdLocationPin } from "react-icons/md";

import ImportantMessage from "../UI/ImportantMessage";

const Item = ({ data }) => {
  return (
    <div className={styles.container}>
      <p className={styles.time}>
        {data.startDate} - {data.endDate}
      </p>

      <div className={styles.main}>
        <div className={styles.header}>
          <p className={styles.title}>
            {data.subtitleSmall && <span>{data.subtitleSmall}, </span>}
            {data.title}
          </p>
          <div className={styles.orgAndIcons}>
            <p className={styles.org}>{data.organization}</p>
            <div className={styles.infoIcons}>
              <ImportantMessage
                text={data.location + ", " + data.country}
                icon={<MdLocationPin />}
              />
              {data.description && (
                <ImportantMessage
                  text={data.description}
                  icon={<HiInformationCircle />}
                />
              )}
              {data.website && (
                <a
                  className={styles.website}
                  href={data.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  <HiGlobeAlt />
                </a>
              )}
            </div>
          </div>
        </div>

        <ul className={styles.description}>
          {data.entries.map((item, index) => (
            <li key={index}>{item.description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Item;
