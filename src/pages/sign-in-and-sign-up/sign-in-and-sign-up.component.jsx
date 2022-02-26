import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./sign-in-and-sign-up.styles.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUpPage = ({ currentUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) navigate("/");
  }, [currentUser]);

  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
