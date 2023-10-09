
import './App.css';
import { Accr } from './Components/Accr';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Stats from './Components/Stats';
import Subscription from './Components/Subscription';

function App() {
  return (
    <>
    <Navbar/>
    <Stats/>
    <Accr />
    <Subscription/>
    <Footer/>
    </>
  );
}

export default App;
