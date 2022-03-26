import './css/App.css';
import './ethereum-test.js'
import {Outlet, Link} from 'react-router-dom';

function App() {
  var username = localStorage.getItem('username');
  return (
    <div className="App">
    <Outlet />
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to='/'>Go to Main Page</Link>
        <hr/>
        <Link to='login'>Go to Login Page</Link>
        {username? (
          <div>
            <hr width="200px"/>
            <Link to='profile'>Go to Profile Page</Link>
          </div>
        ) : <div/>}
      </nav>
    </div>
  );
}

export default App;