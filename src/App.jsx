import './App.css'
import { Routes,Route} from 'react-router-dom';
import Home from './components/homeUser.jsx';
import Login from './components/Login';
import Accounts from './components/Accounts.jsx';
import Dashboard from './components/Dashboard.jsx';

function App(){
  return (
    <>
      
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Accounts' element={<Accounts/>}></Route>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
       
      </Routes>
    </>
  );
};

export default App;
