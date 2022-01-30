import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import "./test";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (!userAuth) {
        this.setState({ currentUser: userAuth }); // userAuth is null here
        return;
      }

      const userDataSnapshot = await createUserProfileDocument(userAuth);
      this.setState({
        currentUser: {
          id: userDataSnapshot.id,
          ...userDataSnapshot.data(),
        },
      });

      // console.log("State: ", this.state);
    });
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact={true} path={"/"} component={HomePage}></Route>

          <Route exact path={"/shop/"} component={ShopPage}></Route>

          <Route
            exact
            path={"/signin/"}
            component={SignInAndSignUpPage}
          ></Route>
        </Switch>
      </div>
    );
  }
}
export default App;
