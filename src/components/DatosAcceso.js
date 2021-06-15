import { useHistory } from "react-router-dom";

const DatosAcceso = () => {
  const history = useHistory();
  return (
    <>
      <form className="col-7">
        <h2 className="text-center py-3">Sign In</h2>
        <div className="row justify-content-center">
          <div className="col-8">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="nombre form-control"
              id="username"
              placeholder="Username"
              required
            />
          </div>
          <div className="col-8">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="nombre form-control"
              id="password"
              placeholder="123456789"
              required
            />
            <small id="passwordHelpInline" className="text-muted">
              Must be 8-20 characters long.
            </small>
          </div>

          <div className="col-8">
            <label htmlFor="repeat-password">Confirm password</label>
            <input
              type="password"
              className="nombre form-control"
              id="repeat-password"
              placeholder="123456789"
              required
            />
            <small id="passwordHelpInline" className="text-muted">
              Must be 8-20 characters long.
            </small>
          </div>
          <div className="row">
            <div className="col text-left">
              <button
                className="btn btn-contiune"
                onClick={() => history.goBack()}
              >
                GO BACK
              </button>
            </div>
            <div className="col text-right">
              <button className="btn btn-contiune">CONTINUE</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default DatosAcceso;
