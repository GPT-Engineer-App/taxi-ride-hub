import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Booking from "./pages/Booking.jsx";
import Taxis from "./pages/Taxis.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/booking" element={<Booking />} />
        <Route exact path="/taxis" element={<Taxis />} />
      </Routes>
    </Router>
  );
}

export default App;