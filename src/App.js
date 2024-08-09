import './css/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PhotoShoot from './components/PhotoShoot';
import NavigationBar from './components/Navbar';
import WhatsApp from './components/WhatsApp';
import WhoAmI from './components/WhoAmI';
import Footer from './components/Footer';
import { UserChoiceProvider } from './context/UserChoiceContext';

function App() {
  return (
   <Router>
    <UserChoiceProvider>
      <NavigationBar />
      <div style={{ paddingTop: '56px' }}>
        <Routes>
            <Route path='/' exact Component={Home} />
            <Route path='/whoami' exact Component={WhoAmI} />
            <Route path='/photoshoot' exact Component={PhotoShoot} />
        </Routes>
      </div>
      <WhatsApp />
      <Footer />
    </UserChoiceProvider>
   </Router>
  );
}

export default App;