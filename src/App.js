import {
  BrowserRouter as Router,
  Routes,
  Route
}
  from 'react-router-dom';

// import Toaster npm from "toaster"

import './App.css';
import {
  HomePage,
  Course,
  LinkRouter
}
  from './shortPath/path';

function App() {
  return (
    <div className="App">
      {/* <Toaster position='top-right' ></Toaster> */}
      <header className="App-header">
        <Router>
          <Routes>
            <Route path={LinkRouter.HOME} element={<HomePage />}></Route>
            <Route path={LinkRouter.COURSE} element={<Course />}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
