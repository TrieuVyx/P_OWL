import React,
{ useEffect, useState }
  from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
}
  from 'react-router-dom';
import './App.css';
import {
  HomePage,
  Course,
  LinkRouter,
  LoginPage,
  checkTokenExist,
  checkPermission,
  CourseManagementPage,
  UserManagementPage
}
  from './shortPath/path';

import {
  DetailUser
}
from './shortPath/adminTabUrl/adminTabUrl'
import { Toaster } from 'react-hot-toast'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [permission, setPermission] = useState("STUDENT")
  useEffect(() => {
    const token = checkTokenExist();
    const checkPer = checkPermission();
    if (token !== null && checkPer !== null) {
      setIsLoggedIn(true);
      setPermission(checkPer)
    } else {
      setIsLoggedIn(false);
      setPermission(checkPer)
    }
  }, [])
  return (
    <div className="App">
      <Toaster position='top-right' reverseOrder={false}></Toaster>
      <header className="App-header">
        <Router>
          <Routes>
            {isLoggedIn ? (
              permission === "ADMIN" ? (
                <>
                  <Route path={LinkRouter.HOME} element={<HomePage />} />
                  <Route path={LinkRouter.COURSE} element={<Course />} />
                  <Route path={LinkRouter.LOGIN} element={<LoginPage />} />
                  <Route path={LinkRouter.COURSEMANA} element={<CourseManagementPage />} />
                  <Route path={LinkRouter.USERMANA} element={<UserManagementPage />} />
                  <Route path={LinkRouter.DETAIL} element={<DetailUser />} />

                </>
              ) : (
                <>
                  <Route path={LinkRouter.HOME} element={<HomePage />} />
                  <Route path={LinkRouter.COURSE} element={<Course />} />
                  <Route path={LinkRouter.LOGIN} element={<LoginPage />} />

                </>
              )
            ) : (
              <>
                <Route path={LinkRouter.HOME} element={<HomePage />} />
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
