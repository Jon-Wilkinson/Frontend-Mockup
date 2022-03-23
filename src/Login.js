import React from 'react';
import './css/Login.css';
import { useNavigate } from 'react-router-dom'

function Login() {
  let navigate = useNavigate();

  return (
    <header className="Login-header">
      <h1>
        This is the login page!
      </h1>
      <form>
        <label>
          Username: <br></br>
          <input type="text" name="username" />
        </label>
        <br></br>
        <label>
          Password: <br></br>
          <input type="password" name="password" />
        </label>
        <br></br>
        <input type="submit" value="Submit" onClick={(event) => {
          console.log('sumbitted');
          navigate('/profile');
          event.preventDefault();
        }} />
      </form>
    </header>
  );
}

export default Login;