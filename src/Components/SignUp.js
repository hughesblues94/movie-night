import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/SignUp.css';

const SignUp = () => {
  const initialState = {
    fields: {
    username: "",    
    email: "",  
    password: "",
    confirmPassword: "",
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const [error, setError] = useState();

  const navigate = useNavigate();

  const registration = async (event) => {
    event.preventDefault();
    if (fields.password === fields.confirmPassword) {
      try {
        axios.get("http://localhost:3300/email", {email: fields.email}).then((res) => {
        console.log('in the result')
        console.log(res)
        if (res === 0) {
            setError("This email has already been used! please head over to sign in")
        } else {
        axios
          .post(`http://localhost:3300/users`, {
            username: fields.username, email: fields.email, password: fields.password })
          .then((response) => {
            console.log(response.data[0])
            const { userID } = response.data[0];
            localStorage.setItem("userID", JSON.stringify(userID));
            const localStoredUserID = localStorage.getItem("userID");
            console.log("the local storage has this userID" + localStoredUserID);
            navigate("/")           
          })
            .catch((e) => {
            console.log(e);
            event.preventDefault();
          });
      }
    })
    } catch (e) {
        setError(e.message);
      }
    } else {
      setError("Those passwords did not match, please try again");
    }
  };

  const handleFieldChange = (event) => {
    event.preventDefault();
    setFields({ ...fields, [event.target.name]: event.target.value });
    console.log(fields);
  };

  return (
    <div className="form">
      <h1>Sign Up</h1>
      <div>
        <form onSubmit={registration} className="form">
          <label htmlFor="name">Your Username</label>
          <input
            name="username"
            required
            type="text"
            placeholder="e.g. Marlon Brando"
            value={fields.username}
            onChange={handleFieldChange}
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="e.g example@email.com"
            value={fields.email}
            onChange={handleFieldChange}
          />

          <label htmlFor="password">
            Password (minimum 6 characters, must contain a letter and a number)
          </label>
          <input
            type="password"
            name="password"
            data-testid="password"
            required
            placeholder="*******"
            minLength="6"
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$"
            value={fields.password}
            onChange={handleFieldChange}
          />

          <label htmlFor="confirmPassword">Confirm Password </label>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="*******"
            value={fields.confirmPassword}
            onChange={handleFieldChange}
          />
          {!!error && <p>{error}</p>}

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
      </div>
  );
};

export default SignUp;