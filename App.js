import './App.css';
import React from 'react';
import Home from './components/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Dosa from './itemcontents/Dosa';
import Idli from './itemcontents/Idli';
import Gulabjamun from './itemcontents/Gulabjamun';
import Jelabi from './itemcontents/Jelabi';
import Kesari from './itemcontents/Kesari';
import Murukku from './itemcontents/Murukku';
import Sambar from './itemcontents/Sambar';
import Venpongal from './itemcontents/Venpongal';
import Vada from './itemcontents/Vada';
import Back from './components/Back';
import Some from './components/Some';

function App() {
  return (
    // <BrowserRouter>
    // <Routes>
    //   <Route path='/' element={<Home/>}/>
    //   <Route path='/dosa' element={<Dosa/>}/>
    //    <Route path='/idli' element={<Idli/>}/>
    //    <Route path='/gulabjamun' element={<Gulabjamun/>}/>
    //    <Route path='/jelabi' element={<Jelabi/>}/>
    //    <Route path='/kesari' element={<Kesari/>}/>
    //    <Route path='/murukku' element={<Murukku/>}/>
    //    <Route path='/sambar' element={<Sambar/>}/>
    //    <Route path='/venpongal' element={<Venpongal/>}/>
    //    <Route path='/vada' element={<Vada/>}/>
    //    <Route path='/' element={<Back/>}/>
       
       
    // </Routes>
    // </BrowserRouter>
  <div>
    <Some/>
  </div>
  );
}

export default App;
