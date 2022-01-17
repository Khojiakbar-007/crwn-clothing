import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact={true} path={"/"} component={HomePage}></Route>

        <Route exact path={"/shop/"} component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
