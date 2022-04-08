import './App.css';
import Home from './components/Home';
import Appointments from './components/Appointments';
import Bookanappointment from './components/Bookanappointment';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Error from './components/Error';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/appointments' element={<Appointments />} />
        <Route exact path='/bookanappointment' element={<Bookanappointment />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
