import { Routes, Route } from 'react-router-dom';
import './App.css';
import Discount from './components/Discount/Discount';
import Dashboard from './components/Dashboard/Home';
import HomePage from './components/HomePage';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import ResetPassword from './components/Login/ResetPassword';
import Orders from './components/Orders/Orders';
import Profile from './components/Profile/Profile';
import SavedPlans from './components/SavedPlans/SavedPlans';
import Cart from './components/Cart/Cart';
import ConfirmOrder from './components/ConfirmOrder/ConfirmOrder';


function App() {


  return (
    <div className='bg-[#fff]'>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/savedplans' element={<SavedPlans></SavedPlans>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/discount' element={<Discount></Discount>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/resetpassword' element={<ResetPassword></ResetPassword>}></Route>
        <Route path='/confirmorder' element={<ConfirmOrder></ConfirmOrder>}></Route>
      </Routes>
    </div>
  );
}

export default App;
