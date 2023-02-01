import React from "react";
import styles from "./Driver.module.css";
import Drive from "../../images/drive.png";

function Driver() {
  return (
    <div className={styles.driver}>
      <div className={styles.left}>
        <img src={Drive} alt="/" />
      </div>
      <div className={styles.right}>
        <h2>
          Find you perfect <span>to try before you buy</span>
        </h2>
        <p>
          Make sure your future wheels works well with your lifestyle by taking
          your time in driver seat
        </p>
        <button>Browse Cars</button>
      </div>
    </div>
  );
}

export default Driver;
