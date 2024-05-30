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
  RegisterPage,
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
  EndState,
  ProfilePages
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
  
  const checkPer = localStorage.getItem('Hierachy')
 

  return (
    <div className="App">
      <Toaster position="top-right" reverseOrder={false} />
      <header className="App-header">
        <Router>
          <Routes>
            {
              checkPer === "ADMIN" ? (
                <>
                  <Route path={LinkRouter.HOME} element={<HomePage />} />
                  <Route path={LinkRouter.LOGIN} element={<LoginPage />} />
                  <Route path={LinkRouter.REGISTER} element={<RegisterPage />} />
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
                  <Route path={LinkRouter.HOME} element={<Course />} />
                  <Route path={LinkRouter.LOGIN} element={<LoginPage />} />
                  <Route path={LinkRouter.REGISTER} element={<RegisterPage />} />
                  <Route path={LinkRouter.INITSTATE} element={<InitState />} />
                  <Route path={LinkRouter.PROFILE} element={<ProfilePages />} />
                  <Route path={LinkRouter.COURSETOLECTURE} element={<InitStateTw />} />
                </>
              )
            }
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
