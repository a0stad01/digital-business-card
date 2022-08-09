import './App.css';
import Image from './components/header';
import Info from './components/Info';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Image />
      <div className='wrapper'>
        <Info />
        <About />
        <Interests />
      </div>
      <Footer />

    </div>
  );
}

export default App;
