import Stepper from "../Status Bar/Stepper";
import styles from "./topBar.module.css";
const TopBar = () => {
  return (
    <>
      <div
        className="border d-flex p-3 justify-content-between align-items-center"
        style={{ width: "100%" }}
      >
        <button type="button" className="btn btn-primary rounded-0">
          Complete Profile
        </button>
        <a href="/" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-bell-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
          </svg>
        </a>
      </div>
      <div
        className="border d-flex p-3 justify-content-between align-items-center"
        style={{ width: "100%", maxHeight: "80px" }}
      >
        <div className={styles.text}>Choose your new site</div>
        <Stepper />
      </div>
    </>
  );
};

export default TopBar;
