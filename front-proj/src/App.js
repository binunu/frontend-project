import logo from './logo.svg';
// import './App.css';
import Header from './header/Header';
import {Routes, Route} from 'react-router-dom';
import Main from './main/Main';
import ScheduleSpring from './sub/ScheduleSpring';
import Galary from './sub/Galary';
import Footer from './footer/Footer'; 
import ScheduleSummer from './sub/ScheduleSummer';
import ScheduleFall from './sub/ScheduleFall';
import ScheduleWinter from './sub/ScheduleWinter';
import QandA from './sub/QandA';
// import Schedule from './sub/Schedule';


function App() {
  return (
    <div>
    {/* <div className="App"> */}
      
     <Header/>
     {/* <Home1/> */}
     <Routes>
      <Route exact path='/' element={<Main/>}/>
      <Route exact path='/scheduleSpring' element={<ScheduleSpring/>}/>
      <Route exact path='/scheduleSummer' element={<ScheduleSummer/>}/>
      <Route exact path='/scheduleFall' element={<ScheduleFall/>}/>
      <Route exact path='/scheduleWinter' element={<ScheduleWinter/>}/>
      <Route exact path='/QandA' element={<QandA/>}/>
      <Route exact path='/galary' element={<Galary/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
