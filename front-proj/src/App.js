import logo from './logo.svg';
// import './App.css';
import Header from './header/Header';
import {Routes, Route} from 'react-router-dom';
import Main from './main/Main';
import Schedule from './sub/Schedule';
import Community from './sub/Community';
import Galary from './sub/Galary';


function App() {
  return (
    <div className="App">
      
     <Header/>
     {/* <Home1/> */}
     <Routes>
      <Route exact path='/' element={<Main/>}/>
      <Route exact path='/schedule' element={<Schedule/>}/>
      <Route exact path='/galary' element={<Galary/>}/>
      <Route exact path='/community' element={<Community/>}/>
     </Routes>
     
    </div>
  );
}

export default App;
