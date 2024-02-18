import image3 from "../Images/stock-image-3.png";
import logo from "../Images/logo.png";
import Form from "../Components/Form/Form";
const Register2 = () => {
  return (
    <div className="card border border-0" style={{ maxWidth: 780 }}>
      <div className="row g-0">
        <div
          className="d-none d-lg-flex col-md-4 p-4 d-flex flex-column gap-4"
          style={{ backgroundColor: "#5e00ffd9" }}
        >
          <div className="d-flex flex-row gap-2">
            <img src={logo} className="img-fluid" width={30} alt="Rooba" />
            <span className="text-white fw-medium">Rooba</span>
          </div>
          <div className="my-auto">
            <span className="text-white fw-medium">
              India&apos;s first fully integrated platform on the blockchain
            </span>
            <img
              src={image3}
              className="img-fluid"
              alt="Vector"
              draggable={false}
            />
          </div>
        </div>
        <div className="col-md-8 p-4">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Register2;
