import './App.css';
import Footer from './components/footer';
import Hero from './components/hero';
import Navbar from './components/navbar';

function App() {
  document.body.style='background: #5A68B0;';
  return (
    <div className="App">
        <div className='navbar'>
        <Navbar />
        </div>
     <Hero />
     <Footer />
    </div>
  );
}

export default App;
