import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import LoginRegPage from './pages/LoginRegPage';
import Admin from './pages/Admin';


function App() {
  const user_id = localStorage.getItem("user_id");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginRegPage />} />
        <Route path="/admin" element={<Admin />} />
        
     
      </Routes>
    </Router>
  );
}

export default App;
