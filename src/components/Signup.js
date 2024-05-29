import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "../CSS/Signup.css"; // Make sure the path is correct

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess(true); // Set success state to true
      setError(null); // Clear any previous errors
    } catch (error) {
      setError(error.message);
      setSuccess(false); // Ensure success state is false
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2 className="signup-title">Signup</h2>
        {error && (
          <div className="signup-error-card">
            <p className="signup-error-text">{error}</p>
          </div>
        )}
        {success && (
          <div className="signup-success-card">
            <p className="signup-success-text">Signup successful!</p>
          </div>
        )}
        <form className="signup-form" onSubmit={handleSignup}>
          <input
            className="signup-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="signup-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="signup-button" type="submit">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
