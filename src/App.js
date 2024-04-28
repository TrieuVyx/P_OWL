import React,
{ useEffect, useState }
  from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect
}
  from 'react-router-dom';


import './App.css';
import {
  HomePage,
  Course,
  LinkRouter,
  LoginPage,
  checkTokenExist
}
  from './shortPath/path';
import { Toaster } from 'react-hot-toast'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = checkTokenExist();
    if (token !== null) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      window.onbeforetoggle = LinkRouter.LOGIN;
    }

  }, [])
  return (
    <div className="App">

      <Toaster position='top-right' reverseOrder={false}></Toaster>
      <header className="App-header">
        <Router>
          <Routes>
            {isLoggedIn  ? (
              <>
                <Route path={LinkRouter.HOME} element={<HomePage />} />
                <Route path={LinkRouter.COURSE} element={<Course />} />
              </>
            ) : (
              <>
              
                <Route path={LinkRouter.HOME} element={<HomePage />}> 
                </Route>
                <Route path={LinkRouter.LOGIN} element={<LoginPage />} />

              </>
            )}
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
