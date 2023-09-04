import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Sign from './Sign';
import Register from './Register';
import EditUser from './users/EditUser';
import TableM from './TableM';
import Sidebar from './Sidebar';
import TabletFill from './TabletFill';
import PatientFill from './PatientFill';
import NoOfAppointment from './NoOfAppointment';

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Sign />}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route  path ="/editUser/:id" element={<EditUser/>}></Route>
             <Route path="/home" element={<TableM />}></Route>
             <Route path="/TabletFill" element={<TabletFill />}></Route>
             <Route path="/PatientFill" element={<PatientFill />}></Route>
             <Route path="/NoOfAppointments" element={<NoOfAppointment />}></Route>
          </Routes>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
