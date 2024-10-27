import { useState } from 'react';
import './App.css';
import Home from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Destinations from './pages/DestinationPage';
import CrewPage from './pages/CrewPage';
import TechPage from './pages/Technology';
function App() {

  const [burgerDiv, setBurgerDiv] = useState(false)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home setBurgerDiv={setBurgerDiv} burgerDiv={burgerDiv}/>}/>
          <Route path='/destination' element={<Destinations setBurgerDiv={setBurgerDiv} burgerDiv={burgerDiv}/>}/>
          <Route path='/crew' element={<CrewPage setBurgerDiv={setBurgerDiv} burgerDiv={burgerDiv}/>}/>
          <Route path='/tech' element={<TechPage setBurgerDiv={setBurgerDiv} burgerDiv={burgerDiv}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
