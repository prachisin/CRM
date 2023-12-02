import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Sidebar from './Components/Sidebar';
import Login from './Login';
import Forgot from './Forgot';
import Register from './Register';
import Dashboard from './Components/Dashboard';
import Employee from './Components/Employee';
import Leads from './Components/Leads';
import Setting from './Components/Setting';
import Lookup from './Components/Lookup';
import Getotp from './Getotp';
import Leave from './Components/Leave';
import Administration from './Components/Administration';
import Loader from './Components/Loader';



function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Loader/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='Register' element={<Register/>}/>
        <Route path='Forgot' element={<Forgot/>}/>
        <Route path='Sidebar' element={<Sidebar/>}/>
        <Route path='Dashboard' element={<Dashboard/>}/>
        <Route path='Employee' element={<Employee/>}/>
        <Route path='Leads' element={<Leads/>}/>
        <Route path='Leave' element={<Leave/>}/>
        <Route path='Setting' element={<Setting/>}/>
        <Route path='Lookup' element={<Lookup/>}/>
        <Route path='Getotp' element={<Getotp/>}/>
        <Route path='Administration' element={<Administration/>}/>
       

      
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
