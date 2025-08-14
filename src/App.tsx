import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './Pages/HomePage';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#121223] text-white" style={{ position: 'relative' }}>
      <Navbar />
      {children}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
