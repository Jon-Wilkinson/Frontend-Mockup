import {useState, useEffect, useRef} from 'react';
import './css/App.css';

function Profile() {
  const [selectedFile, setSelectedFile] = useState(0);
  console.log(selectedFile);
  const username = useRef(0);

  useEffect( () => { // Todo
    username.current = (localStorage.getItem('username') || null);
    console.log("Getting username", username.current);
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>This is the profile page for {localStorage.getItem('username')}!</h1>
        {selectedFile ? (
          <div>
            <img alt="Profile" width="250px" src={URL.createObjectURL(selectedFile)} />
            {/* <button onClick={() => setSelectedFile(null)}>Remove Image</button> */}
          </div>
        ):
          <div>
            <h2>Upload a picture here!</h2>
          </div>}
        <form>
          <input 
          type="file"
          onChange={(e) => {
            setSelectedFile(e.target.files[0]);
          }}
          />
        </form>
      </header>
    </div>
    
  );
}

export default Profile;