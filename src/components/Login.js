export const Login = () => {
  return (
    <>
      <h2 className="text-center">Log In</h2>
      <div className="row justify-content-center">
        <div className="col-8">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            className="nombre form-control"
            id="name"
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
          <small id="passwordHelpInline" class="text-muted">
            Must be 8-20 characters long.
          </small>
        </div>

        <div className="col-8">
          <input
            type="checkbox"
            className="checkbox-password nombre"
            id="repeat-password"
            placeholder="123456789"
            required
          />
          <label className="px-2" htmlFor="repeat-password">
            Remember password
          </label>
        </div>
      </div>
    </>
  );
};
