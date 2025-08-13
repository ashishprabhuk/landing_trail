import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Andro from './Pages/Andro';
import Blackhole from './Pages/Blackhole';
import Globe from './Pages/Globe';
import SpaceBoi from './Pages/SpaceBoi';
import RadiationOfSpace from './Pages/RadiationOfSpace';
import SpaceNebula from './Pages/SpaceNebula';
import PlanesAndSatellites from './Pages/PlanesAndSatellites';
import Galaxy from './Pages/Galaxy';
import SpaceExploration from './Pages/SpaceExploration';
import DizzyingSpaceTravel from './Pages/DizzyingSpaceTravel';
import AWindyDay from './Pages/AWindyDay';
import Andromeda from './Pages/Andromeda';
import Navbar from './components/Navbar';
import Earth from './Pages/Earth';
import Dark from './Pages/Dark';
import HeroSection from './Pages/Herosection';
import Deep from './Pages/Deep';
import MeetingsHero from './Pages/MeetingsHero';
import Arc from './components/Arc';
import Arcs from './Pages/Arcs';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      {children}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><MeetingsHero /></Layout>} />
        <Route path="/Services" element={<Layout><HeroSection /></Layout>} />
        <Route path="/contact Us" element={<Layout><Arcs /></Layout>} />
        <Route path="/About Us" element={<Layout><HeroSection /></Layout>} />
        <Route path="/nebula" element={<Layout><SpaceNebula /></Layout>} />
        <Route path="/planes" element={<Layout><MeetingsHero /></Layout>} />
        <Route path="/Home" element={<Layout><Dark /></Layout>} />
        
      </Routes>
    </Router>
  );
}

export default App;
