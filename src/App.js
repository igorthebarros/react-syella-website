import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Banner from './components/Banner';
import ContactMe from './components/ContactMe';
import PhotoShoot from './components/PhotoShoot';
import NavigationBar from './components/Navbar';
import WhatsApp from './components/WhatsApp';

function App() {
  return (
   <Router>
    <NavigationBar />
    <Banner />
    <div style={{ paddingTop: '56px' }}>
      <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/contactMe' exact Component={ContactMe} />
          <Route path='/photoshoot' exact Component={PhotoShoot} />
      </Routes>
    </div>
    <WhatsApp />
   </Router>
  );
}

export default App;