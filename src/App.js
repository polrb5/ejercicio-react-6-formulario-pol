import { DatosAcceso } from "./components/DatosAcceso";
import { DatosPersonales } from "./components/DatosPersonales";
import { Login } from "./components/Login";

function App() {
  return (
    <div className="container ">
      <div className="formulario row justify-content-center align-items-center">
        <form className="col-6">
          <DatosPersonales />
          <DatosAcceso />
          <Login />
        </form>
      </div>
    </div>
  );
}

export default App;
