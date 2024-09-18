import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Landing';
import LandingPage from './Pages/LandingPage';
import SignupForm from './Pages/Signup';
import LoginForm from './Pages/Login';
import ProductRegistrationForm from './Pages/ProductRegister';
import MultiPartForm from './Pages/ServiceRequest';
import Userlanding from './Pages/Userlanding';
import AdminDashboard from './Pages/Admindashboard';
import RequestStatusPage from './Pages/TrackSts';
import UserNav from './Components/UserNav';
import AdminReq from './Pages/AdminReq';
import AdminNav from './Components/AdminNav';
import UserRequestsPage from './Pages/AssignTech';
import TechnicianView from './Pages/Technicians';
import TechnicianDashboard from './Pages/TechDash';
import TechNav from './Components/TechNav';
import TechnicianModulePage from './Pages/TechView';
import { Navigate } from 'react-router-dom';
import TechnicianTasks from './Pages/WorkTracker';
import ServiceCenterLocator from './Pages/ServiceCenterLocator';
import AdminCustomer from './Pages/AdminCustomer';
import Customers from './Pages/Customers';
import CustomerPayment from './Pages/Payment';
import ViewDetails from './Pages/Managereqs';
export default function Approuter() {
  return (
    <>
      <Router>
        <Routes>
           <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/" element={<LandingPage/>}></Route>
            <Route path='/login' element={<LoginForm/>}></Route>
            <Route path="/signup" element={<>  <Navbar/> <SignupForm /></>  } />
            <Route path='/product' element={<ProductRegistrationForm/>}/>
            <Route path='/req' element={<MultiPartForm/>}/>
            <Route path='/user' element={<Userlanding/>}></Route>
            <Route path='/AdminDashboard' element={<AdminDashboard/>}/>
            <Route path='/sts' element={ <>  <UserNav/>  <RequestStatusPage/> </>  }/>
            <Route path='/reqs' element={<><AdminNav/>  <AdminReq/></>  }/>
            <Route path='/tech' element={<><TechNav/><TechnicianView/></>}/>
            <Route path='/assign' element={<UserRequestsPage/>}/>
            <Route path='/techie' element={ <> <TechNav/> <TechnicianDashboard/> </>}/>
            <Route path='/appointments' element={<TechnicianModulePage/>}/>
            <Route path='/worktracker' element={<><TechNav/> <TechnicianTasks/></> }/>
            <Route path='/servicecenter' element={ <><UserNav/>  <ServiceCenterLocator/></> }/>
            <Route path='/customers' element={<><UserNav/><Customers/> </>}/>
            <Route path='/customer' element={<><AdminNav/><AdminCustomer/> </>}/>
            <Route path='/billing' element={<><UserNav/> <CustomerPayment/></>}/>
            <Route path='/view' element={<><AdminNav/><ViewDetails/></>}/>
        </Routes>
      </Router>
    </>
  )
}
