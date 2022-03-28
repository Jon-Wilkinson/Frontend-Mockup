import './css/App.css';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function validatePassword(passwordHash, username) {
  if (parseInt(passwordHash) === parseInt(localStorage.getItem(username))) {
    return true;
  }
  return false;
}

function hash(password) {
  let char;
  let hash=0;
  for (let i=0; i<password.length; i++) {
    char = password.charCodeAt(0);
    hash += char;
  }
  console.log("hash is",parseInt(hash));
  hash*=81;
  hash = hash % 255;
  console.log("now it is",parseInt(hash));
  return parseInt(hash);
}

function Login() {
  let navigate = useNavigate();
  const [username, setUsername] = useState(0);
  const [password, setPassword] = useState(0);
  // const [passwordHash, setPasswordHash] = useState(0);
  useEffect( () => {
    setUsername("");
    setPassword("");
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
          <input type="text" name="username" value={username} onInput={(e) => { setUsername(e.target.value)}}/>
        </label>
        <br></br>
        <label>
          Password: <br></br>
          <input type="password" name="password" value={password} onInput={(e) => {setPassword(e.target.value)}}/>
        </label>
        <br></br>
        <input type="submit" value="Submit" onClick={(event) => {
          event.preventDefault();
          // setPasswordHash(hash(password));
          let hashed = hash(password);
          if(validatePassword(hashed, username)) {
            setUsername(username); 
            localStorage.setItem('username', username);
            console.log('setting hash to', hashed);
            localStorage.setItem(username, hashed);
            navigate('/profile');
           } else { 
             setUsername("");
             setPassword("");
            //  localStorage.setItem('username', "");
           }
        }} />
      </form>
    </header>
  </div>
  );
}

export default Login;