import './App.css';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import Signup from './components/Signup';
import Login from './components/Login';
import Admin from './components/Admin';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
           <Route path='/admin' element={<Admin/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
