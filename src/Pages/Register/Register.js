import React from "react";
import "../Login/Login.css";
import { FaUserAlt, FaRegSadTear } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import registerImg from "../../assets/images/20286064_6203326.png";

const Register = () => {
  return (
    <div id="register">
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
                <AiFillUnlock />
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                />
              </div>
              {/* user confirmPassord */}
              <div className="user-password">
                <AiFillLock />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                />
              </div>

              <input
                type="submit"
                name="submit"
                value="Register"
                className="RegsubmitBtn"
              />
            </form>
          </div>
          <hr className="regHr" />
          <div className="login-account">
            <p>
              Already Have Any Account?
              <a href="/user/login">Login</a>
            </p>
          </div>
        </div>
        <div className="login-page-image">
          <img src={registerImg} alt="" className="login-img" />
        </div>
      </div>
    </div>
  );
};

export default Register;
