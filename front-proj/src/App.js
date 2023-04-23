import logo from './logo.svg';
// import './App.css';
import Header from './header/Header';
import {Routes, Route} from 'react-router-dom';
import Main from './main/Main';
import ScheduleSpring from './sub/ScheduleSpring';
import Footer from './footer/Footer'; 
import ScheduleSummer from './sub/ScheduleSummer';
import ScheduleFall from './sub/ScheduleFall';
import ScheduleWinter from './sub/ScheduleWinter';
import QandA from './sub/QandA';
import Galary2022 from './sub/Galary2022'; 
import Galary2020 from './sub/Galary2020';
import Galary2021 from './sub/Galary2021';


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
      <Route exact path='/galary2020' element={<Galary2020/>}/>
      <Route exact path='/galary2021' element={<Galary2021/>}/>
      <Route exact path='/galary2022' element={<Galary2022/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
