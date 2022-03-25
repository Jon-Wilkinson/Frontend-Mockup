import './css/App.css';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function validatePassword(password) {
  return true;
}

function Login() {
  let navigate = useNavigate();
  const [username, setUsername] = useState(0);
  const [passwordHash, setPasswordHash] = useState(0);
  useEffect( () => {
    setUsername(localStorage.getItem('username') || null);
    console.log("Setting username");
  }, []);

  return (
  <div className="App">
    <header className="App-header">
      <h1>
        This is the login page!
      </h1>
      <form>
        <label>
          Username: <br></br>
          <input type="text" name="username" 
          onInput={(e) => {
            setUsername(e.target.value);
            }}/>
        </label>
        <br></br>
        <label>
          Password: <br></br>
          <input type="password" name="password" onInput={(e) => {setPasswordHash(e.target.value)}}/>
        </label>
        <br></br>
        <input type="submit" value="Submit" onClick={(event) => {
          event.preventDefault();
          console.log('sumbitted');
          if(validatePassword(passwordHash)) {
            
            setUsername(username); 
            console.log('Setting username to', username);
            localStorage.setItem('username', username);
            navigate('/profile');
           } else setUsername(null);
        }} />
      </form>
    </header>
  </div>
  );
}

export default Login;