import { useState } from "react";
import Item from "./Item";
import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io";
import styles from "./classical.module.scss";

const CategoryComponent = ({ title, data, subcat }) => {
  const [detailsShown, setDetailsShown] = useState(subcat ? false : false);

  return (
    <div className={subcat ? styles.subcatItem : styles.categoryItem}>
      <div
        className={styles.categoryTitle}
        onClick={() => setDetailsShown(!detailsShown)}
      >
        <p>{title}</p>
        {detailsShown ? <IoIosArrowDropdown /> : <IoIosArrowDropup />}
      </div>

      <div className={detailsShown ? styles.subItems : "hidden"}>
        {data.map((item, index) => {
          if (item.type !== "subCat" || !item.type) {
            return <Item data={item} key={index} />;
          } else {
            return (
              <CategoryComponent
                key={index}
                title={item.subCatTitle}
                data={item.titles}
                subcat={true}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default CategoryComponent;
