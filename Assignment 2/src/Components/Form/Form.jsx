import { useEffect, useState } from "react";
import styles from "./form.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Form = () => {
  // States to store the values of the input fields
  const [show, setShow] = useState(false);
  const [country, setCountry] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [countries, setCountries] = useState([]);
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // Function to show/hide the password
  const handleShow = () => {
    setShow(!show);
  };

  // To fetch the list of countries from the API
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryList = data
          .map((countryData) => countryData.name.common)
          .sort();
        setCountries(countryList);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // If all the fields are filled, then the form will be submitted successfully. Otherwise, it will show an error message.
    if (!firstname || !lastname || !country || !age || !email || !password) {
      toast.error("Please fill all the fields", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setError(true);
      return;
    }

    // If the email is not valid, then it will show an error message.
    if (email && !emailRegex.test(email)) {
      toast.error("Please enter a valid email", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setError(false);
    }

    // If the password is less than 8 characters, then it will show an error message.
    if (password.length < 8) {
      toast.error("Password should be at least 8 characters long", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setError(false);
    }

    // If email and password are valid, and all the fields are filled, then submit the form successfully, and redirect to the thank you page.
    if (emailRegex.test(email) && password.length >= 8) {
      toast.success("Form submitted successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      // Redirect to the thank you page after 3 seconds
      setTimeout(() => {
        navigate("/success");
      }, 3000);
    }
  };

  return (
    <>
      <form
        className="d-flex flex-column gap-2 bg-white"
        onSubmit={handleSubmit}
      >
        <p className="fs-5 fw-bold text-primary m-0">Register</p>
        <span className="text-secondary fw-light">
          Join the largest institutional players running their businesses with{" "}
          <strong> Rooba.</strong>
        </span>
        {/* Firstname and Lastname */}
        <div className="d-flex gap-4">
          <div className="w-75">
            <label className="fw-semibold text-dark mb-1">Firstname</label>
            <div
              className={`${styles.inputForm} ${error && styles.errorForm}
             d-flex align-items-center ps-2 rounded-3`}
            >
              <input
                type="text"
                className={`${styles.input} ${error && styles.errorInput}`}
                placeholder="John"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
          </div>
          <div className="w-75">
            <label className="fw-semibold text-dark mb-1">Lastname</label>
            <div
              className={`${styles.inputForm} ${
                error && styles.errorForm
              } d-flex align-items-center ps-2 rounded-3`}
            >
              <input
                type="text"
                className={`${styles.input} ${error && styles.errorInput}`}
                placeholder="Doe"
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* Country and age  */}
        <div className="d-flex gap-4">
          <div className="w-75">
            <label className="fw-semibold text-dark mb-1">Country</label>
            <div
              className={`${styles.inputForm} ${error && styles.errorForm}
             d-flex align-items-center ps-2 rounded-3`}
            >
              <select
                type="text"
                className={`${styles.input} ${error && styles.errorInput}`}
                placeholder="India"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="" disabled>
                  Select a country
                </option>
                {countries.map((countryOption, index) => (
                  <option key={index} value={countryOption}>
                    {countryOption}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="w-75">
            <label className="fw-semibold text-dark mb-1">Age</label>
            <div
              className={`${styles.inputForm} ${error && styles.errorForm}
             d-flex align-items-center ps-2 rounded-3`}
            >
              <input
                type="number"
                className={`${styles.input} ${error && styles.errorInput}`}
                placeholder="20"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* Email */}
        <label className="fw-semibold text-dark">Email </label>
        <div
          className={`${styles.inputForm} ${
            error && styles.errorForm
          } d-flex align-items-center ps-2 rounded-3`}
        >
          <svg
            height={15}
            viewBox="0 0 32 32"
            width={15}
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Layer_3" data-name="Layer 3">
              <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" />
            </g>
          </svg>
          <input
            type="text"
            className={`${styles.input}  ${error && styles.errorInput} `}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
          />
        </div>
        {/* Password */}
        <label className="fw-semibold text-dark">Password </label>
        <div
          className={`${styles.inputForm} ${
            error && styles.errorForm
          } d-flex align-items-center ps-2 rounded-3`}
        >
          <svg
            height={15}
            viewBox="-64 0 512 512"
            width={15}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0" />
            <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0" />
          </svg>
          <input
            type={show ? "text" : "password"}
            className={`${styles.input}  ${error && styles.errorInput} `}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
          />
          <svg
            onClick={handleShow}
            style={{ cursor: "pointer" }}
            viewBox="0 0 576 512"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
          </svg>
        </div>
        <div className="d-flex flex-row align-items-center gap-1 justify-content-between">
          <div className="d-flex align-items-center gap-1">
            <label className="text-secondary-emphasis ">
              Already have an account?
              <a href="/" className="text-primary text-decoration-none">
                {" "}
                Log in.
              </a>
            </label>
          </div>
        </div>
        <button className={styles.button_submit}>Join Now</button>
      </form>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default Form;
