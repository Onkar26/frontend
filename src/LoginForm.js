import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform login API request using email and password
    // You can use Axios, Fetch, or any other HTTP library

    // Example using Axios
    // axios.post('/login', { email, password })
    //   .then(response => {
    //     // Handle successful login
    //   })
    //   .catch(error => {
    //     // Handle login error
    //   });

    // Clear form fields
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          className="form-control"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          className="form-control"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  );
};

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform signup API request using email and password
    // You can use Axios, Fetch, or any other HTTP library

    // Example using Axios
    // axios.post('/signup', { email, password })
    //   .then(response => {
    //     // Handle successful signup
    //   })
    //   .catch(error => {
    //     // Handle signup error
    //   });

    // Clear form fields
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          className="form-control"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          className="form-control"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Signup</button>
    </form>
  );
};

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform forgot password API request using email
    // You can use Axios, Fetch, or any other HTTP library

    // Example using Axios
    // axios.post('/forgot-password', { email })
    //   .then(response => {
    //     // Handle successful forgot password request
    //   })
    //   .catch(error => {
    //     // Handle forgot password error
    //   });

    // Clear form field
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          className="form-control"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Reset Password</button>
    </form>
  );
};

export { LoginForm, SignupForm, ForgotPasswordForm };
