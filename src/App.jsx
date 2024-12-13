import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Schedule from './pages/Schedule';
import Payment from './pages/Payment';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
