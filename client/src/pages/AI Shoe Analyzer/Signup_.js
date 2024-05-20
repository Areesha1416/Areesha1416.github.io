import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Import your custom CSS file for styling


const Register = ({setAuth}) => {
  

  const [inputs, setInput] = useState({
    email: '',
    password: '',
    companyName: '',
    owner: '',
    streetAddress: '',
    state: '',
    city: '',
    zipCode: '',
    country: '',
    phone_no: '',
    company_description: '',
  });

  const {
    email,
    password,
    companyName,
    owner,
    streetAddress,
    state,
    city,
    zipCode,
    country,
    phone_no,
    company_description,
  } = inputs;

  const onChange = (e) => {
    setInput({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = {
        email,
        password,
        companyName,
        owner,
        streetAddress,
        state,
        city,
        zipCode,
        country,
        phone_no,
        company_description,
      };
      const response = await fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const parse = await response.json();
      if (parse.token) {
        localStorage.setItem('token', parse.token);
        setAuth(true);
        // toast.success("Register Successfully");
        alert("Register Successfully");
      } else {
        setAuth(false);
        // toast.error(parse.message);
        alert(parse.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Register</h2>
      <form onSubmit={onSubmitForm}>
        <div className="input-group">
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={companyName}
            onChange={onChange}
            className="login-input"
            required
          />
          <input
            type="text"
            name="owner"
            placeholder="Owner"
            value={owner}
            onChange={onChange}
            className="login-input"
            required
          />
          <input
            type="text"
            name="streetAddress"
            placeholder="Street Address"
            value={streetAddress}
            onChange={onChange}
            className="login-input"
            required
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={state}
            onChange={onChange}
            className="login-input"
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={city}
            onChange={onChange}
            className="login-input"
            required
          />
          <input
            type="text"
            name="zipCode"
            placeholder="Zip Code"
            value={zipCode}
            onChange={onChange}
            className="login-input"
            required
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={country}
            onChange={onChange}
            className="login-input"
            required
          />
          <input
            type="text"
            name="phone_no"
            placeholder="Phone No"
            value={phone_no}
            onChange={onChange}
            className="login-input"
            required
          />
          <textarea
            type="text"
            name="company_description"
            placeholder="Company Description"
            value={company_description}
            onChange={onChange}
            className="login-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={onChange}
            className="login-input"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
            className="login-input"
            required
          />
          <button type="submit" className="login-btn">
            Submit
          </button>
        </div>
      </form>
      <p className="login-register-link">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
