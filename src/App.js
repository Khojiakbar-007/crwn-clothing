import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import Header from "./components/header/header.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import setCurrentUser from "./redux/user/user.actions";

import "./App.css";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    console.log("Authorization is in process!");
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (!userAuth) {
        setCurrentUser(userAuth); // userAuth is null here
        return;
      }

      const userDataSnapshot = await createUserProfileDocument(userAuth);
      setCurrentUser({
        id: userDataSnapshot.id,
        ...userDataSnapshot.data(),
      });
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact={true} path={"/"} component={HomePage} />

          <Route exact path={"/shop/"} component={ShopPage} />

          <Route
            exact
            path={"/signin/"}
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />

          <Route exact path={"/checkout"} component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   console.log(state);
//   const { user } = state;
//   return{currentUser: user.currentUser,}
// };
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default connect(
//   ({ user }) => ({
//     currentUser: user.currentUser,
//   }),

//   (dispatch) => ({
//     setCurrentUser: (user) =>
//       dispatch({
//         type: "SET_CURRENT_USER",
//         payload: user,
//       }),
//   })
// )(zApp);
