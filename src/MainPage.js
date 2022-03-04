import {Outlet} from 'react-router-dom';
import './css/MainPage.css';

function MainPage() {
    return (
      <div className="MainPage">
      <Outlet />
        <header className="MainPage-header">
          <h1>This is the Main Page!</h1>
        </header>
      </div>
    );
  }
  
  export default MainPage;