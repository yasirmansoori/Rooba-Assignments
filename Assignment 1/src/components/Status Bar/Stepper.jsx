import { useState } from "react";
import styles from "./stepper.module.css";
const Stepper = () => {
  const [isComplete, setIsComplete] = useState(0);
  const calculateWidth = () => {
    const url = window.location.href;
    if (url.includes("step1")) {
      return 0;
    } else if (url.includes("step2")) {
      return 50;
    } else if (url.includes("step3")) {
      return 100;
    }
  };

  return (
    <div className={styles.stepper}>
      <div className={styles.circle}>
        <div className="d-flex justify-content-center align-items-center">
          {isComplete >= 1 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              className="bi bi-check-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
          ) : null}
          1
        </div>
      </div>
      <div className={styles.circle}>
        <div className="d-flex justify-content-center align-items-center">
          {isComplete >= 1 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              className="bi bi-check-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
          ) : null}
          2
        </div>
      </div>
      <div className={styles.circle}>
        <div className="d-flex justify-content-center align-items-center">
          {isComplete >= 1 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              className="bi bi-check-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
          ) : null}
          3
        </div>
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{ width: `${calculateWidth()}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Stepper;
