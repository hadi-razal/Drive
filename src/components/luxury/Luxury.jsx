import React from "react";
import styles from "./Luxury.module.css";

function Luxury() {
  return (
    <div className={styles.luxury}>
      <div className={styles.heading}>
        <h2>Luxury Selection</h2>
        <div className={styles.text_bg}>
          <p>
            <span>Select from the top luxury vehicles to roll in style</span>
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1631295868223-63265b40d9e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="/"
          />

          <div className={styles.content}>
            <h3>Rolls Royce</h3>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1630378246381-c2f063b20084?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="/"
          />

          <div className={styles.content}>
            <h3>Bentley</h3>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1618486613525-c694bf152b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="/"
          />

          <div className={styles.content}>
            <h3>Range Rover</h3>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="/"
          />

          <div className={styles.content}>
            <h3>Rolls Royce</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Luxury;
