import { useState } from "react";
import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io";

import styles from "./profile.module.scss";
const Profile = () => {
  const [detailsShown, setDetailsShown] = useState(false);

  return (
    <div className={styles.profile}>
      <div
        className={styles.titleContainer}
        onClick={() => setDetailsShown(!detailsShown)}
      >
        <p className={styles.title}>Profile</p>
        {detailsShown ? <IoIosArrowDropdown /> : <IoIosArrowDropup />}
      </div>

      <p className={detailsShown ? styles.profileText : "hidden"}>
        Techie at heart, business in spirit, philosopher in mind. Driven by
        curiosity and a desire to change the world, I get people enthusiastic
        about an idea, connect them and build (tech-oriented) systems that make
        those ideas happen. I am specialized in organizational culture and
        seeing the world through human systems of power and influence, but have
        the luck of being a 13-year old self-taught coder. Having been through
        the hardships of founding (and failing) a startup, I understand the
        various aspects of business and can add the most value where multiple
        disciplines intersect. Now, I am looking for the next best place where I
        can leave an impact on the world.
      </p>
    </div>
  );
};

export default Profile;
