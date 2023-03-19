import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Routes>
      <Route path='/' element={<div>
        <Header/>
        <Home/>
      </div>}/>
      <Route path='/checkout' element={ <div>
        <Header/>
        <Checkout/>
      </div>
      }/>
      <Route path='/login' element={ <div>
        
        <Login/>
      </div>
      }/>
    </Routes>   
    
     
  
  );
}

export default App;
