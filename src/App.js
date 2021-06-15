import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DatosAcceso from "./components/DatosAcceso";
import DatosPersonales from "./components/DatosPersonales";
import Login from "./components/Login";

function App() {
  return (
    <div className="container ">
      <div className="formulario row justify-content-center align-items-center">
        <Router>
          <Switch>
            <Route path="/" exact>
              <DatosPersonales />
            </Route>
            <Route
              path="./components/DatosAcceso"
              component={DatosAcceso}
              exact
            >
              <DatosAcceso />
            </Route>
            <Route path="./Login" exact>
              <Login />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
