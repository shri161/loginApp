import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Graph from './Graph'
import {BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom';
function App() {
  return (
    <div >
      <Router>
    <Routes>
      <Route exact path="/" element={<Form/>}/>
      <Route exact path="/about" element={<Graph/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
