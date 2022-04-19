import { useState } from "react";

import styles from "./generalInfo.module.scss";

import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { ImWhatsapp } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { GiCoffeeCup } from "react-icons/gi";
import { AiOutlineShrink, AiOutlineExpandAlt } from "react-icons/ai";

const GeneralInfo = () => {
  const [minimal, setMinimal] = useState(true);

  return (
    <div className={`${styles.general} ${minimal && styles.generalMinimal}`}>
      <div className={styles.minimize} onClick={() => setMinimal(!minimal)}>
        {minimal ? (
          <>
            <GiCoffeeCup />
            {/* <p>?</p> */}
          </>
        ) : (
          <AiOutlineShrink />
        )}
      </div>

      <div className={styles.generalChildren}>
        <p className={styles.title}>Jens Wilms</p>

        <ul className={styles.contact}>
          <a href="mailto:hi@jenswilms?subject=Coffee?">
            <li>
              <HiOutlineMail />
              <p>hi@jenswilms.com</p>
            </li>
          </a>
          <li>
            <HiOutlineLocationMarker />
            <p>Taipei, Taiwan</p>
          </li>
          <a
            href="https://www.linkedin.com/in/jenswilms/"
            target="_blank"
            rel="noreferrer"
          >
            <li>
              <BsLinkedin />
              <p>/in/jenswilms</p>
            </li>
          </a>
        </ul>

        <a
          href="mailto:hi@jenswilms?subject=Coffee?"
          className={styles.buttonCta}
        >
          <GiCoffeeCup />
          <p>Let's get some coffee!</p>
        </a>
      </div>
    </div>
  );
};

export default GeneralInfo;
