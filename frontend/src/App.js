import logo from './logo.svg';
import './App.css';
import { Header, About, Contact, Explore, Login, Signup } from './Containers';
import { Navbar, Footer } from './Components'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Explore/>
      <Contact/>
      <Login/>
      <Signup/>
      <Footer/>
    </div>
  );
}

export default App;
