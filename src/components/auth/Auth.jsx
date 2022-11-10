import React, { useState, useReducer, useContext } from "react";
import { Link } from "react-router-dom";
import AuthTopbar from "../authTopBar/AuthTopbar";
import usePasswordToggle from "../../hooks/usePasswordToggle";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./auth.css";
import "../../App.css";
import axios from "axios";
import { OverlayContext } from "../../hooks/context/OverlayContext";

const client = axios.create({
  baseURL: "https://the-garland-realty.herokuapp.com/v1",
});

const reducer = (state, action) => {
  switch (action.type) {
    case "normalUser":
      return { ...state, isNormalUser: !state.isNormalUser, isAgent: false };
    case "agent":
      return { ...state, isAgent: !state.isAgent, isNormalUser: false };
    default:
      throw new Error();
  }
};

const Auth = ({ setClose, close }) => {
  const [isAuthPage, setIsAuthPage] = useState("login");
  const [InputType, Icon] = usePasswordToggle();
  const [state, dispatch] = useReducer(reducer, {
    isNormalUser: false,
    isAgent: false,
  });

  const { setSignupData, setDisplayAuth, setDisplayValidationMessage } =
    useContext(OverlayContext);

  const signupFormik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmationPassword: "",
      countryCode: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Minimum of 8 characters"),
      confirmationPassword: Yup.string()
        .required("Please confirm password")
        .oneOf([Yup.ref("password"), null], "Password does not match"),
      countryCode: Yup.string().required("Required"),
      phoneNumber: Yup.number("Characters must be a number")
        .integer()
        .required(),
    }),
    onSubmit: async (values) => {
      await client
        .post("/user/signup", values)
        .then((data) => {
          console.log(data.data.data);
          if (!data.data.error) {
            setSignupData(data);
            setDisplayAuth(false);
            setDisplayValidationMessage(true);
          }
        })
        .catch((err) => console.log(err));
    },
  });

  return (
    <div className="auth-container slide-in-bck-center">
      {isAuthPage === "login" && (
        <div className="signin">
          <h2>Sign In</h2>
          <AuthTopbar
            text="Don’t have an Account? "
            link="Sign Up for an Account"
            linkTo="signup"
            setClose={setClose}
            close={close}
            setAuthPage={setIsAuthPage}
          />
          <section className="signInForm">
            <form autoComplete="on">
              <h3>SIGN IN WITH EMAIL ADDRESS</h3>
              <div className="emailInput">
                <label className="label" htmlFor="email">
                  Email
                </label>
                <input type="email" name=" email" placeholder="Email Address" />
              </div>
              <div className="password">
                <label className="label" htmlFor="password">
                  Password
                </label>
                <input
                  type={InputType}
                  name="password"
                  placeholder="Password"
                />
                <span className="signInTogglePassword">{Icon}</span>
              </div>
              <div className="keepSigned">
                <span>
                  <input className="checkbox" type="checkbox" name="" id="" />
                  Keep Me Signed In
                </span>
                <Link to="/">Forgot Password ?</Link>
              </div>
              <p className="terms">
                This site is protected by reCAPTCHA and the Google{" "}
                <Link to="/">Privacy Policy</Link> and{" "}
                <Link to="/">Terms of Service</Link> apply.
              </p>
              <button type="submit" className="btn">
                SIGN IN
              </button>
            </form>
          </section>
        </div>
      )}
      {isAuthPage === "signup" && (
        <div className="signup">
          <h2>Sign Up for an Account</h2>
          <AuthTopbar
            text="Already have an Account? "
            link="Sign In"
            linkTo="login"
            setClose={setClose}
            close={close}
            setAuthPage={setIsAuthPage}
          />
          <section className="signUpForm">
            <form onSubmit={signupFormik.handleSubmit} method="POST">
              <h3>SIGN UP WITH EMAIL ADDRESS</h3>
              <div className="nameInput">
                <label className="label" htmlFor="firstName">
                  First Name
                </label>
                {signupFormik.touched.firstName &&
                signupFormik.errors.firstName ? (
                  <p className="error">{signupFormik.errors.firstName}</p>
                ) : null}
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  onChange={signupFormik.handleChange}
                  value={signupFormik.values.firstName}
                  onBlur={signupFormik.handleBlur}
                />
              </div>
              <div className="nameInput">
                <label className="label" htmlFor="lastName">
                  Name
                </label>
                {signupFormik.touched.lastName &&
                signupFormik.errors.lastName ? (
                  <p className="error">{signupFormik.errors.lastName}</p>
                ) : null}
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={signupFormik.handleChange}
                  value={signupFormik.values.lastName}
                  onBlur={signupFormik.handleBlur}
                />
              </div>
              <div className="emailInput">
                <label className="label" htmlFor="email">
                  Email
                </label>
                {signupFormik.touched.email && signupFormik.errors.email ? (
                  <p className="error">{signupFormik.errors.email}</p>
                ) : null}
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={signupFormik.handleChange}
                  value={signupFormik.values.email}
                  onBlur={signupFormik.handleBlur}
                />
              </div>
              <div className="password">
                <label className="label" htmlFor="password">
                  Password
                </label>
                {signupFormik.touched.password &&
                signupFormik.errors.password ? (
                  <p className="error">{signupFormik.errors.password}</p>
                ) : null}
                <input
                  type={InputType}
                  name="password"
                  placeholder="Password"
                  onChange={signupFormik.handleChange}
                  value={signupFormik.values.password}
                  onBlur={signupFormik.handleBlur}
                />
                <span className="signInTogglePassword">{Icon}</span>
              </div>
              <div className="password">
                <label className="label" htmlFor="confirmationPassword">
                  Confirm password
                </label>
                {signupFormik.touched.confirmationPassword &&
                signupFormik.errors.confirmationPassword ? (
                  <p className="error">
                    {signupFormik.errors.confirmationPassword}
                  </p>
                ) : null}
                <input
                  type={InputType}
                  name="confirmationPassword"
                  placeholder="Confirm Password"
                  onChange={signupFormik.handleChange}
                  value={signupFormik.values.confirmationPassword}
                  onBlur={signupFormik.handleBlur}
                />
                <span className="signInTogglePassword">{Icon}</span>
              </div>
              <div className="telInput">
                <div className="countryCode">
                  <label className="label" htmlFor="countryCode">
                    Tel
                  </label>
                  {signupFormik.touched.countryCode &&
                  signupFormik.errors.countryCode ? (
                    <p className="error">{signupFormik.errors.countryCode}</p>
                  ) : null}
                  <input
                    type="text"
                    name="countryCode"
                    placeholder="Tel code"
                    onChange={signupFormik.handleChange}
                    value={signupFormik.values.countryCode}
                    onBlur={signupFormik.handleBlur}
                  />
                </div>
                <div className="phoneNumber">
                  <label className="label" htmlFor="phoneNumber">
                    Tel
                  </label>
                  {signupFormik.touched.phoneNumber &&
                  signupFormik.errors.phoneNumber ? (
                    <p className="error">{signupFormik.errors.phoneNumber}</p>
                  ) : null}
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    onChange={signupFormik.handleChange}
                    value={signupFormik.values.phoneNumber}
                    onBlur={signupFormik.handleBlur}
                  />
                </div>
              </div>
              <div className="keepSigned">
                <p>Are you an a agent or a normal user?</p>
                <div className="checkbox-container">
                  <span>
                    <input
                      className="checkbox"
                      type="checkbox"
                      name="identity"
                      id="normalUser"
                      value="Normal User"
                      onChange={() => dispatch({ type: "normalUser" })}
                      checked={state.isNormalUser}
                    />
                    Normal User
                  </span>
                  <span>
                    <input
                      className="checkbox"
                      type="checkbox"
                      name="identity"
                      id="agent"
                      value="Agent"
                      onChange={() => dispatch({ type: "agent" })}
                      checked={state.isAgent}
                    />
                    Agent
                  </span>
                </div>
              </div>
              <p className="terms">
                This site is protected by reCAPTCHA and the Google{" "}
                <Link to="/">Privacy Policy</Link> and{" "}
                <Link to="/">Terms of Service</Link> apply.
              </p>
              <p className="terms">
                By creating an account you agree to our{" "}
                <Link to="/">Terms of use</Link> and{" "}
                <Link to="/">Privacy Policy</Link>.
              </p>
              <button type="submit" className="btn">
                SIGN UP
              </button>
            </form>
          </section>
        </div>
      )}
    </div>
  );
};

export default Auth;
