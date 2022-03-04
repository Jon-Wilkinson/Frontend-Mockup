import './css/App.css';
import './ethereum-test.js'
import {Outlet, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Outlet />
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to='mainpage'>Go to Main Page</Link>
        <hr/>
        <Link to='login'>Go to Login Page</Link>
      </nav>
    </div>
  );
}

export default App;