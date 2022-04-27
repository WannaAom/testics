import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Information from './component/information';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
        <div>
<div className='App'>
      
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/information" element={<Information />} />
            
        {/* <Home/> */}
        {/* <Information/> */}
      
          </Routes>
          
      
    </div>
        </div>

      </Router>
  );
}

export default App;
