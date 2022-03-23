import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

/* 
To add a route:
Create a new file in src: <ROUTE>.js
Look at imports and format of other js files to get an idea of how to format <ROUTE>.js
Don't forget to import App.css for styling
In general, create a function called <ROUTE> which returns some html and includes the line:
export default <ROUTE>;
at the end. 
Then go back here and add:
import <ROUTE> from './<ROUTE>';
and finally add:
<Route path="<ROUTE>" element={ <ROUTE> />} />
to the routes below, underneath the main "/" route
*/
import './index.css';
import App from './App';
import Login from './Login';
import MainPage from './MainPage';
import Profile from './Profile';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route path="mainpage" element={<MainPage />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route
          // 404 Route
            path="*"
            element={
              <div className='App'>
              <header className='App-header'>
                <h1>There's nothing here!</h1>
                  </header>
            </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
