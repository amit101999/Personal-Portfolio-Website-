import React from "react";
import "./Login.css";
import { FaUserAlt, FaRegSadTear } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { AiFillLock } from "react-icons/ai";
import loginImage from "../../assets/images/14620625_5484597.jpg";

const Login = () => {
  return (
    <div id="login">
      <div className="background-container">
        <div className="first-color"></div>
        <div className="second-color"></div>
        <div className="third-color"></div>
        <div className="fourth-color"></div>
      </div>
      <div className="login-page">
        <div className="login-details">
          <div className="app-logo"></div>
          <div className="app-tagline">
            <p>Hi!</p>
            <p>Have Great Ideas , Show With Your Projects!</p>
          </div>
          <div className="user-details">
            <form action="">
              {/* user Email */}
              <div className="user-Email">
                <FaUserAlt />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  name="email"
                />
              </div>

              {/* user Passord */}
              <div className="user-password">
                <AiFillLock />
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                />
              </div>

              <input
                type="submit"
                name="submit"
                value="Login"
                className="submitBtn"
              />
            </form>
          </div>
          <div className="forgot-password">
            <p>
              <a href="/user/forgot-password">Forgot password?</a>
            </p>
          </div>
          <hr />
          <div className="create-account">
            <p>
              Don't have Any Account
              <a href="/user/create-account">Create One</a>
            </p>
          </div>
        </div>
        <div className="login-page-image">
          <img src={loginImage} alt="" className="login-img" />
        </div>
      </div>
    </div>
  );
};

export default Login;
