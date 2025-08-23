import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './Pages/HomePage';
import ContactModal from './components/ContactModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#121223] text-white" style={{ position: 'relative' }}>
      {/* <Navbar /> */}
      <HomePage openModal={() => setIsModalOpen(true)} />
      {isModalOpen && (
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
      
    </div>
  );
}

export default App;
