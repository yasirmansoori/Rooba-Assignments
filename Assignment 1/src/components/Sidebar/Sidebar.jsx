import logo from "../../images/logo.png";
import styles from "./sidebar.module.css";
const Sidebar = () => {
  return (
    <>
      <div className={styles.desktop}>
        <div className={styles.box}>
          <img src={logo} />
        </div>
        <div className={styles.box}>
          <a href="/" className="text-decoration-none fw-medium text-secondary">
            Cart{" "}
          </a>
        </div>
        <div className={styles.box}>
          <a href="/" className="text-decoration-none fw-medium text-dark">
            Market{" "}
          </a>
        </div>
        <div className={styles.box}>
          <a href="/" className="text-decoration-none fw-medium text-secondary">
            Settings{" "}
          </a>
        </div>
        <div className={styles.box}>
          <a href="/" className="text-decoration-none fw-medium text-secondary">
            Logout{" "}
          </a>
        </div>
      </div>

      <div className={styles.mobile}>
        <nav className="navbar bg-body-tertiary w-100">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logo} width={80} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item border p-2">
                  <a
                    className="nav-link fw-medium"
                    aria-current="page"
                    href="#"
                  >
                    Cart
                  </a>
                </li>
                <li className="nav-item border p-2">
                  <a
                    className="nav-link fw-medium active"
                    aria-current="page"
                    href="#"
                  >
                    Market
                  </a>
                </li>
                <li className="nav-item border p-2">
                  <a
                    className="nav-link fw-medium"
                    aria-current="page"
                    href="#"
                  >
                    Settings
                  </a>
                </li>
                <li className="nav-item border p-2">
                  <a
                    className="nav-link fw-medium"
                    aria-current="page"
                    href="#"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
