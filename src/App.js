import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import Edit from './components/Edit';
import UserList from './components/UserList';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
