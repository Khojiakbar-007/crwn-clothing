import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

const PageWithID = () => (
  <div>
    <h1>Page with ID</h1>
  </div>
);

function App() {
  return (
    <div>
      {/* <Switch> */}
      <Route exact={true} path={"/"} component={HomePage}></Route>

      <Route path={"/shop/hats"} component={HatsPage}></Route>

      <Route path={"/shop/hats/:something"} component={PageWithID}></Route>
      {/* </Switch> */}
    </div>
  );
}

export default App;
