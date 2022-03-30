import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const button = () => {
  return (
    <Link to="/contact">
      <button className={styles.button}>
        Холбоо барих
        <div className={styles.poison}></div>
      </button>
    </Link>
  );
};

export default button;
