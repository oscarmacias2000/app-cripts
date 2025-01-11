import './App.css'
import { Routes,Route } from 'react-router-dom';
import Login from "../src/components/Login"
import Home from './components/home';

function App(){
  return (
    <>
      <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
      </Routes>
    </>
  );
};

export default App;
