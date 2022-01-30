import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { signInWithEmailAndPassword } from "firebase/auth";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await signInWithEmailAndPassword(auth, email, password);

      this.setState({
        email: "",
        password: "",
      });
    } catch (err) {
      console.log("Error signing in: ");
      console.log(err);
    }
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <nav>Sign in with your email and password</nav>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton /* className="sign-in-button" */ type="submit">
              Sign In
            </CustomButton>

            <CustomButton
              onClick={signInWithGoogle}
              isGoogleSignIn
              type="submit"
            >
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
