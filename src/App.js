
import './App.css';
import { Accr } from './Components/Accr';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Stats from './Components/Stats';
import Subscription from './Components/Subscription';
import UpcomingExamination from './Components/UpcomingExamination';
 

function App() {
  return (
    <>
    <Navbar/>
    <Stats/>
   <UpcomingExamination/>
    <Accr />
    <Subscription/>
    <Footer/>
    </>
  );
}

export default App;
