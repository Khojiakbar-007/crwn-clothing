import React from "react";
import "./sign-up.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { createUserWithEmailAndPassword } from "firebase/auth";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    // console.log(e);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    console.log("function ran");
    e.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    console.log("passed condition");

    const { displayName, email, password } = this.state;

    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);

      createUserProfileDocument(user, { displayName });
      
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.log("Error creating user: ", err.message);
      console.error(err);
    }
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
        </form>

        <CustomButton type="submit" onClick={this.handleSubmit}>
          Sign Up
        </CustomButton>
      </div>
    );
  }
}

export default SignUp;
