import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About } from './Component/About';
import { Footer } from './Component/Footer';
import { Header } from './Component/Header';
import { Login } from './Component/Login';
import { Signup } from './Component/Signup';
import { Cuisine } from './Component/Cuisine';
import { Home } from './Component/Home';
import { Order } from './Component/Order';
import { Veg } from './Component/Veg';
import { Drinks } from './Component/Drinks';
import { Dessert } from './Component/Dessert';



function App() {

  let bgStyle= {
    background: 'url("https://images.unsplash.com/photo-1464306076886-da185f6a9d05?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
  }

  return (
    <>
    <div style={bgStyle}>
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/About" element={<About/>} />
          <Route exact path="/Cuisine" element={<Cuisine />}/>
          <Route exact path="/Veg" element={<Veg />}/>
          <Route exact path="/Dessert" element={<Dessert />}/>
          <Route exact path="/Drinks" element={<Drinks />}/>
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/Order" element={<Order/>} />
        </Routes>
        <Footer />
      </Router>
      </div>
    </>
  );
}

export default App;
