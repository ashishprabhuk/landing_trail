import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="min-h-screen bg-[#121223] text-white" style={{ position: 'relative' }}>
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
