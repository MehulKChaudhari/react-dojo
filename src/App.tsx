import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import ExampleList from './components/ExampleList';
import Windowing from './examples/windowing/index.jsx';
import './App.css';

const Navigation = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  if (isHome) return null;
  
  return (
    <header style={{ 
      borderBottom: '1px solid #ccc', 
      padding: '1rem 0', 
      marginBottom: '2rem' 
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Link to="/" style={{ color: '#0366d6', textDecoration: 'none' }}>
          ← Back to Examples
        </Link>
      </div>
    </header>
  );
};

const AppContent = () => {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<ExampleList />} />
        <Route path="/windowing" element={<Windowing />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
