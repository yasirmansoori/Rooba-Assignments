/* eslint-disable no-unused-vars */
import styles from "./site.module.css";
import site from "../../images/site.webp";
import { useState } from "react";
import Footer from "../Footer/Footer";

const Site = () => {
  const [disabled, setDisabled] = useState(true);
  return (
    <div className={styles.site}>
      <div className={styles.content}>
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a className="text-decoration-none" href="#">
                Market
              </a>
            </li>
            <li className="breadcrumb-item">
              <a className="text-decoration-none" href="#">
                Category 1
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Theme Park Site
            </li>
          </ol>
        </nav>
        {/* Breadcrumb */}

        {/* Poster Image */}
        <div className="d-flex">
          <img src={site} className="img-fluid" alt="" />
        </div>
        {/* Poster Image */}
        <hr />

        {/* Details */}
        <div className={styles.details}>
          <div className={styles.detailsLeft}>
            <h3>Theme Park Site</h3>
            <div className="my-3">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>
                :{" "}
              </span>
              1234 Main St, Orlando, FL 32819
            </div>

            <div className={styles.holder}>
              <span className={`${styles.mark} badge`}>Adult Rides</span>
              <span className={`${styles.mark} badge`}>Family Rides</span>
              <span className={`${styles.mark} badge`}>Restaurant</span>
              <span className={`${styles.mark} badge`}>Premium</span>
            </div>

            <div className="my-4">
              <div className="border p-2 text-primary border-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
                <a href="/">View Oppurtunity on polygon</a>
              </div>
            </div>

            <div className={styles.stats}>
              <span className={`${styles.mark} badge`}>
                <div className="d-flex flex-column align-items-start gap-2">
                  <div className="fs-6 text-black">200 Acres</div>
                  <span>Area</span>
                </div>
              </span>
              <span className={`${styles.mark} badge`}>
                <div className="d-flex flex-column align-items-start gap-2">
                  <div className="fs-6 text-black">5 Lacks</div>
                  <span>Starting price</span>
                </div>
              </span>
              <span className={`${styles.mark} badge`}>
                <div className="d-flex flex-column align-items-start gap-2">
                  <div className="fs-6 text-black">10 Days</div>
                  <span>Remaining Days</span>
                </div>
              </span>
              <span className={`${styles.mark} badge`}>
                <div className="d-flex flex-column align-items-start gap-2">
                  <div className="fs-6 text-black">2.5years</div>
                  <span>Next Check</span>
                </div>
              </span>
            </div>
          </div>
          <div className={styles.detailsRight}>
            <div className="d-flex flex-column align-items-lg-end gap-3">
              <div>
                <button
                  type="button"
                  className="btn btn-primary rounded-0 w-100"
                >
                  Complete Profile
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-primary rounded-0 w-100"
                >
                  Site Visit{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-up-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                    />
                  </svg>
                </button>
              </div>

              <div style={{ width: "100%", maxWidth: "400px" }}>
                <div className="d-flex justify-content-between">
                  <div className="">
                    <h4>Rs 20,00,000</h4>
                  </div>
                  <div className="">65,00,000</div>
                </div>
                <div
                  className="progress rounded-0"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar" style={{ width: "30%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Details */}
        <hr />

        {/* Overview */}
        <div className={styles.overview}>
          <div className={styles.overviewLeft}>
            <h3>Overview</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est iste
              praesentium voluptatibus in molestias magni odio amet beatae,
              maiores culpa atque nostrum vitae? Velit ab dolorem assumenda
              sapiente tempora sequi corrupti! Nihil facere accusamus voluptatem
              dolores, ratione necessitatibus voluptatum illo sunt architecto
              in, doloremque aperiam autem saepe vero similique, enim delectus
              ipsam nemo commodi temporibus dignissimos exercitationem. Eaque
              quidem aut porro, deserunt voluptates cupiditate nostrum placeat.
            </p>
          </div>
          <div className={styles.overviewRight}>
            <div className="d-flex flex-column">
              {/* Complete Profile */}
              <div className={styles.step}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    disabled={!disabled}
                  />
                  <label
                    className="form-check-label fw-medium"
                    htmlFor="flexCheckDefault"
                  >
                    Complete Profile
                  </label>
                </div>
                <div>
                  <button
                    type="button"
                    disabled={!disabled}
                    className="btn btn-primary rounded-0 float-end w-50"
                  >
                    Complete Profile
                  </button>
                </div>
              </div>
              {/* Complete Profile */}

              {/* step 1 */}
              <div className={styles.step}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    disabled={disabled}
                  />
                  <label
                    className="form-check-label fw-medium"
                    htmlFor="flexCheckDefault"
                  >
                    Step 1
                  </label>
                </div>
                <div>
                  <button
                    type="button"
                    disabled={disabled}
                    className="btn btn-primary rounded-0 float-end w-50"
                  >
                    Pay
                  </button>
                </div>
              </div>
              {/* step 1 */}

              {/* step 2 */}
              <div className={styles.step}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    disabled={disabled}
                  />
                  <label
                    className="form-check-label fw-medium"
                    htmlFor="flexCheckDefault"
                  >
                    Step 2
                  </label>
                </div>
                <div>
                  <button
                    type="button"
                    disabled={disabled}
                    className="btn btn-primary rounded-0 float-end w-50"
                  >
                    Pay
                  </button>
                </div>
              </div>
              {/* step 2 */}

              {/* step 3 */}
              <div className={styles.step}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    disabled={disabled}
                  />
                  <label
                    className="form-check-label fw-medium"
                    htmlFor="flexCheckDefault"
                  >
                    Step 3
                  </label>
                </div>
                <div>
                  <button
                    type="button"
                    disabled={disabled}
                    className="btn btn-primary rounded-0 float-end w-50"
                  >
                    Complete
                  </button>
                </div>
              </div>
              {/* step 3 */}

              {/* step 4 */}
              <div className={styles.step}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    disabled={disabled}
                  />
                  <label
                    className="form-check-label fw-medium"
                    htmlFor="flexCheckDefault"
                  >
                    Step 4
                  </label>
                </div>
                <div>
                  <button
                    type="button"
                    disabled={disabled}
                    className="btn btn-primary rounded-0 float-end w-50"
                  >
                    Complete
                  </button>
                </div>
              </div>
              {/* step 4 */}

              {/* step 5 */}
              <div className={styles.step}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    disabled={disabled}
                  />
                  <label
                    className="form-check-label fw-medium"
                    htmlFor="flexCheckDefault"
                  >
                    Step 5
                  </label>
                </div>
                <div>
                  <button
                    type="button"
                    disabled={disabled}
                    className="btn btn-primary rounded-0 float-end w-50"
                  >
                    Complete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Overview */}
        <hr />

        {/* Why and What  */}
        <div className={styles.details}>
          <div className={styles.detailsLeft}>
            <h3>Why ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est iste
              praesentium voluptatibus in molestias magni odio amet beatae,
              maiores culpa atque nostrum vitae? Velit ab dolorem assumenda
              sapiente tempora sequi corrupti! Nihil facere accusamus voluptatem
              dolores, ratione necessitatibus voluptatum illo sunt architecto
              in, doloremque aperiam autem saepe vero similique, enim delectus
              ipsam nemo commodi temporibus dignissimos exercitationem. Eaque
              quidem aut porro, deserunt voluptates cupiditate nostrum placeat.
            </p>
          </div>
          <div className={styles.detailsRight}>
            <h3>What ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est iste
              praesentium voluptatibus in molestias magni odio amet beatae,
              maiores culpa atque nostrum vitae? Velit ab dolorem assumenda
              sapiente tempora sequi corrupti! Nihil facere accusamus voluptatem
              dolores, ratione necessitatibus voluptatum illo sunt architecto
              in, doloremque aperiam autem saepe vero similique, enim delectus
              ipsam nemo commodi temporibus dignissimos exercitationem. Eaque
              quidem aut porro, deserunt voluptates cupiditate nostrum placeat.
            </p>
          </div>
        </div>
        {/* Why and What  */}
        <hr />

        {/* Contact */}
        <div className={`${styles.details} h-100`}>
          <div className={styles.detailsLeft}>
            <h3>Landmarks</h3>
            <div className={styles.landmarks}></div>
            <div className="d-flex align-items-baseline justify-content-between border-bottom p-2">
              <div className="d-flex align-items-baseline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="blue"
                  className="bi bi-airplane-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849" />
                </svg>
                &nbsp;
                <h4 className="text-primary">Airport</h4>
              </div>
              <div className="d-flex flex-column">
                <h5 className="m-0">100 KM</h5>
                <small>Airport 1</small>
              </div>
            </div>
            <div className="d-flex align-items-baseline justify-content-between border-bottom p-2">
              <div className="d-flex align-items-baseline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="blue"
                  className="bi bi-airplane-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849" />
                </svg>
                &nbsp;
                <h4 className="text-primary">Airport</h4>
              </div>
              <div className="d-flex flex-column align-items-end">
                <h5 className="m-0">25 KM</h5>
                <small>Green Which Terminia</small>
              </div>
            </div>
            <div className="d-flex align-items-baseline justify-content-between border-bottom p-2">
              <div className="d-flex align-items-baseline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="blue"
                  className="bi bi-bricks"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 .5A.5.5 0 0 1 .5 0h15a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H2v-2H.5a.5.5 0 0 1-.5-.5v-3A.5.5 0 0 1 .5 6H2V4H.5a.5.5 0 0 1-.5-.5zM3 4v2h4.5V4zm5.5 0v2H13V4zM3 10v2h4.5v-2zm5.5 0v2H13v-2zM1 1v2h3.5V1zm4.5 0v2h5V1zm6 0v2H15V1zM1 7v2h3.5V7zm4.5 0v2h5V7zm6 0v2H15V7zM1 13v2h3.5v-2zm4.5 0v2h5v-2zm6 0v2H15v-2z" />
                </svg>
                &nbsp;
                <h4 className="text-primary">Highway</h4>
              </div>
              <div className="d-flex flex-column align-items-end">
                <h5 className="m-0">100 KM</h5>
                <small>Highway Number 5</small>
              </div>
            </div>
            <div className="d-flex align-items-baseline justify-content-between border-bottom p-2">
              <div className="d-flex align-items-baseline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="blue"
                  className="bi bi-joystick"
                  viewBox="0 0 16 16"
                >
                  <path d="M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2" />
                  <path d="M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23" />
                </svg>
                &nbsp;
                <h4 className="text-primary">Game Center</h4>
              </div>
              <div className="d-flex flex-column align-items-end">
                <h5 className="m-0">80 KM</h5>
                <small>Highway Number 2</small>
              </div>
            </div>
          </div>
          <div className={`${styles.detailsRight} h-100`}>
            <h3>Map</h3>
            <div className="h-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d449178.2467414277!2d76.71417361609797!3d28.413068944021713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d229ab9555555%3A0x144d676960d85d33!2sRooba.Finance%20%7C%20Real%20World%20Asset%20Tokenization%20Platform!5e0!3m2!1sen!2sin!4v1708253152052!5m2!1sen!2sin"
                width="100%"
                height="220px"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div>
              <button type="button" className="btn btn-primary rounded-0 w-100">
                Site Visit{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Site;
