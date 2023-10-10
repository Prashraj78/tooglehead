
import './App.css';
import { Accr } from './Components/Accr';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Stats from './Components/Stats';
import Subscription from './Components/Subscription';
import Swipe from './Components/Swipe';
import UpcomingExamination from './Components/UpcomingExamination';


function App() {
  return (
    <>
      <Navbar />
      <Header/>
      <UpcomingExamination />
      <Swipe />
      <Stats />
      <Accr />
      <Subscription />
      <Footer />
    </>
  );
}

export default App;
