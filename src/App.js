//Bootstrap imported
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

//import react-router
import { BrowserRouter as Router, Routes, Route,Navigate} from 'react-router-dom';
import Layout from './Components/DashboardAll/Layouts/Layout';
import ManageAppointment from './Components/DashboardAll/Pages/ManageAppointment/ManageAppointment';
import Booking from './Components/DashboardAll/Pages/Booking/Booking';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="manage" />} />
        <Route path="manage" element={<ManageAppointment />} />\
        <Route path="booking" element={<Booking/>} />
        {/* Add more nested routes here */}
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
