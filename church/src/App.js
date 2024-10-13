import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/navbar";
import Home from './pages/home';
import SermonsPage from './components/sermon';
import Notices from './components/notices';
import Contributions from './components/contributions';
import Admin from './components/admin';
import Newsletter from './components/newsletter';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sermons" element={<SermonsPage />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/contributions" element={<Contributions />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
    </Router>
  );
}

export default App;
