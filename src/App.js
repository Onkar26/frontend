import React, { useState } from "react";
import axios from "axios";

const root_path = "http://localhost:3000"

const LoginForm = ({ onSwitchToSignup, onSwitchToForgotPassword }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example using Axios
    console.log(email, password)

    axios
      .post(`${root_path}/login`, { email: email, password: password })
      .then((response) => {
        // Handle successful login
        console.log(response)
      })
      .catch((error) => {
        // Handle login error
        console.log(error);
      });

    // Clear form fields
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input onChange={handleEmailChange} />
        <input onChange={handlePasswordChange} />
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
      <p>
        Don't have an account?{" "}
        <button type="button" onClick={onSwitchToSignup}>
          Signup
        </button>
      </p>
      <p>
        Forgot your password?{" "}
        <button type="button" onClick={onSwitchToForgotPassword}>
          Reset Password
        </button>
      </p>
    </form>
  );
};

const SignupForm = ({ onSwitchToLogin, onSwitchToForgotPassword }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${root_path}/signup`, { email: email, password: password })
      .then((response) => {
        // Handle successful signup
        console.log(response)
      })
      .catch((error) => {
        // Handle signup error
        console.log(error);
      });

    // Clear form fields
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input onChange={handleEmailChange} />
        <input onChange={handlePasswordChange} />
      </div>
      <button type="submit" className="btn btn-primary">
        Signup
      </button>
      <p>
        Already have an account?{" "}
        <button type="button" onClick={onSwitchToLogin}>
          Login
        </button>
      </p>
      <p>
        Forgot your password?{" "}
        <button type="button" onClick={onSwitchToForgotPassword}>
          Reset Password
        </button>
      </p>
    </form>
  );
};

const ForgotPasswordForm = ({ onSwitchToLogin, onSwitchToSignup }) => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${root_path}/forgot-password`, { email: email })
      .then((response) => {
        // Handle successful request
        console.log(response)
      })
      .catch((error) => {
        // Handle error
        console.log(error);
      });

    // Clear form field
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input onChange={handleEmailChange} />
      </div>
      <button type="submit" className="btn btn-primary">
        Reset Password
      </button>
      <p>
        Remember your password?{" "}
        <button type="button" onClick={onSwitchToLogin}>
          Login
        </button>
      </p>
      <p>
        Don't have an account?{" "}
        <button type="button" onClick={onSwitchToSignup}>
          Signup
        </button>
      </p>
    </form>
  );
};

const App = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false);

  const switchToLogin = () => {
    setShowLoginForm(true);
    setShowSignupForm(false);
    setShowForgotPasswordForm(false);
  };

  const switchToSignup = () => {
    setShowLoginForm(false);
    setShowSignupForm(true);
    setShowForgotPasswordForm(false);
  };

  const switchToForgotPassword = () => {
    setShowLoginForm(false);
    setShowSignupForm(false);
    setShowForgotPasswordForm(true);
  };

  return (
    <>
      <div>
        <h1>JALA Academy</h1>
        <h3>Login Credentials</h3>
        <h4>Learn anything on Real-Time Scenarios</h4>
        {showLoginForm && (<h4>Login</h4>)}
        {showSignupForm && (<h4>Signup</h4>)}
        {showForgotPasswordForm && (<h4>Forgot Password</h4>)}
      </div>
      <div>
        {showLoginForm && (
          <LoginForm
            onSwitchToSignup={switchToSignup}
            onSwitchToForgotPassword={switchToForgotPassword}
          />
        )}
        {showSignupForm && (
          <SignupForm
            onSwitchToLogin={switchToLogin}
            onSwitchToForgotPassword={switchToForgotPassword}
          />
        )}
        {showForgotPasswordForm && (
          <ForgotPasswordForm
            onSwitchToLogin={switchToLogin}
            onSwitchToSignup={switchToSignup}
          />
        )}
      </div>
    </>
  );
};

export default App;
