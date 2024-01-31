import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav'
import About from './About'
import Product from './Product'
import Home from './Home'
import Footer from './Footer'
import { Signup } from './Signup';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Nav />
        <Routes>
                    <Route path="/" element={<Home />} />  
                        <Route path="/Product" element={<Product />} />
                        <Route path="/About" element={<About />} />
                        <Route path="/Signup" element={<Signup />} />

                    </Routes>
      </BrowserRouter>

<Footer/>

    </div>
  );
}

export default App;
