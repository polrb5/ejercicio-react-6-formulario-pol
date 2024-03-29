import { useHistory } from "react-router";

const DatosPersonales = () => {
  const history = useHistory();
  return (
    <>
      <form className="col-7">
        <h2 className="text-center py-3">Personal Information</h2>
        <div className="row justify-content-center">
          <div className="col-8">
            <label htmlFor="name">First name</label>
            <input
              type="text"
              className="nombre form-control"
              id="name"
              placeholder="First name"
              required
            />
          </div>
          <div className="col-8">
            <label htmlFor="last-name">Last name</label>
            <input
              type="text"
              className="nombre form-control"
              id="last-name"
              placeholder="Last name"
              required
            />
          </div>

          <div className="col-8">
            <label htmlFor="birthday">Birthday</label>
            <input
              type="date"
              className="nombre form-control"
              id="birthday"
              placeholder="DD-MM-YYYY"
              required
            />
          </div>
          <div className="col-8">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="nombre form-control"
              id="email"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div className="col-8 text-center">
            <button
              className="btn btn-contiune"
              onClick={() => history.push("./components/DatosAcceso")}
            >
              CONTINUE
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default DatosPersonales;
