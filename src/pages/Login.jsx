import { useRef, useState } from "react";
import cowo from "/assets/Asset_cowo.svg";
import cewe from "/assets/Asset_cewe.svg";
import lanang from "/assets/lnang.png";
import wedok from "/assets/wdok.png";
// import "../App.css"
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import client from "../router/Client";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputEmail = useRef();
  const inputPassword = useRef();
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const [email, password] = [
      inputEmail.current.value,
      inputPassword.current.value,
    ];

    
    client.post("/auth/login", { email, password }).then(({ data }) => {
      alert("Berhasil Login");
      const userData = data.data.siswa;
      localStorage.setItem("token", data.token);
      localStorage.setItem("nama", data.data.name);
      localStorage.setItem("email", data.data.email);
      // nav("/siswa");
      if (userData !== null) {
        nav("/siswa");
      } else if (userData === null) {
        nav("/admin");
      } else {
        alert("Role tidak dikenali. Hubungi administrator.");
      }
    });
  };
  const [signUpMode, setSignUpMode] = useState(false);

const handleSignUpClick = () => {
  setSignUpMode(true);
};

const handleSignInClick = () => {
  setSignUpMode(false);
};

  return (
    <>
      <div className={`container ${signUpMode ? 'sign-up-mode' : ''}`}>
        <div className="forms-container">
          <div className="signin-signup">
            {/* Sign In Form */}
            <form onSubmit={handleSubmit} className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" ref={inputEmail}/>
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input placeholder="Masukkan password anda"
                  type={showPassword ? "text" : "password"}
                  ref={inputPassword}/>
                  <button
                  type="button"
                  className="absolute lg:translate-y-[75%] translate-y-[60%] right-5"
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon
                    icon={showPassword ? faEye : faEyeSlash}
                    className="lg:text-xl text-lg text-[#5A6A85] "
                  />
                </button>

              </div>
              <input type="submit" value="Login" className="btn solid" />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>

            {/* Sign Up Form */}
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" className="btn" value="Sign up" />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          </div>
        </div>

        {/* Panels Container */}
        <div className="panels-container">
          {/* Left Panel */}
          <div className="panel left-panel">
            <div className="content">
              <h3>New here?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                ex ratione. Aliquid!
              </p>
              <button className="btn transparent" onClick={handleSignUpClick}>
                Sign up
              </button>
            </div>
            <img src="/assets/log.svg" className="image" alt="log illustration" />
          </div>

          {/* Right Panel */}
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button className="btn transparent" onClick={handleSignInClick}>
                Sign in
              </button>
            </div>
            <img src="/assets/register.svg" className="image" alt="register illustration" />
          </div>
        </div>
      </div>
    </>
  );
};