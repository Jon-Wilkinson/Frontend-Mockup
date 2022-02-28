import './App.css';
import './ethereum-test.js'
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is the frontend!</h1>
        <Link to='/login'>Log in here!</Link>
      </header>
    </div>
  );
}

export default App;