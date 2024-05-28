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
  UserManagementPage,
  LectureManagementPage,
  InitState,
  InitStateF,
  InitStateFi,
  InitStateTw,
  InitStateThr,
  ProfileUser,
  EndState
}
  from './shortPath/path';

import {
  DetailUser,
  UpdateUser,
  DeleteUser,
  CreateUser,
  DetailCourse,
  UpdateCourse,
  DeleteCourse,
  CreateCourse,
  DetailLecture,
  UpdateLecture,
  DeleteLecture,
  CreateLecture
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
                  <Route path={LinkRouter.LECMANA} element={<LectureManagementPage />} />
                  <Route path={LinkRouter.DETAILUSER} element={<DetailUser />} />
                  <Route path={LinkRouter.UPDATEUSER} element={<UpdateUser />} />
                  <Route path={LinkRouter.DELETEUSER} element={<DeleteUser />} />
                  <Route path={LinkRouter.CREATEUSER} element={<CreateUser />} />
                  <Route path={LinkRouter.DETAILCOURSE} element={<DetailCourse />} />
                  <Route path={LinkRouter.UPDATECOURSE} element={<UpdateCourse />} />
                  <Route path={LinkRouter.DELETECOURSE} element={<DeleteCourse />} />
                  <Route path={LinkRouter.CREATECOURSE} element={<CreateCourse />} />
                  <Route path={LinkRouter.DETAILLECTURE} element={<DetailLecture />} />
                  <Route path={LinkRouter.UPDATELECTURE} element={<UpdateLecture />} />
                  <Route path={LinkRouter.DELETELECTURE} element={<DeleteLecture />} />
                  <Route path={LinkRouter.CREATELECTURE} element={<CreateLecture />} />
                </>
              ) : (
                <>
                  <Route path={LinkRouter.HOME} element={<HomePage />} />
                  <Route path={LinkRouter.LOGIN} element={<LoginPage />} />
                  <Route path={LinkRouter.COURSE} element={<Course />} />
                  <Route path={LinkRouter.INITSTATE} element={<InitState />} />
                  <Route path={LinkRouter.PROFILE} element={<ProfileUser />} />

                </>
              )
            ) : (
              <>
                <Route path={LinkRouter.HOME} element={<HomePage />} />
                <Route path={LinkRouter.LOGIN} element={<LoginPage />} />
                <Route path={LinkRouter.COURSE} element={<Course />} />
                <Route path={LinkRouter.INITSTATE} element={<InitState />} />
                <Route path={LinkRouter.PROFILE} element={<ProfileUser />} />
              </>
            )}
          </Routes>
        </Router>
      </header>
    </div>
  );
}
export default App;
