import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header, About, Contact, Explore, Login, Signup } from './Containers';
import { Navbar, Footer } from './Components'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Header/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Explore" element={<Explore/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Signup" element={<Signup/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
