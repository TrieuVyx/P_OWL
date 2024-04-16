import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
// import  Toaster  from 'toaster'
import { linkRouter } from './component/constants/constants';
import Home from './component/homePage';
import Course from "./component/coursePage"
function App() {
  return (
    <div className="App">
      {/* <Toaster position='top-right' reverseOrder={false}></Toaster> */}
      <header className="App-header">
        <Router>
          <Routes>
            <Route path={linkRouter.HOME} element={<Home />}></Route>
            <Route path={linkRouter.COURSE} element={<Course />}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
