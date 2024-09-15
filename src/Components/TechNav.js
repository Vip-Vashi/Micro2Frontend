import React from 'react';
import { Link ,replace,useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { FaBackward } from 'react-icons/fa';


const TechNav = () => {
    
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/',{replace:true}); 
    };
    useEffect(() => {
        
        if (location.pathname !== '/login') {
            sessionStorage.setItem('redirectAfterLogin', location.pathname);
        }
    }, [location]);


    const handleGoBack = () => {
        navigate(-1);
      };
     
   
     

    const isActive = (path) => {
        return location.pathname === path ? 'text-cyan-400 font-bold' : 'text-white';
    };
    return (
        <header className="bg-blue-800 p-4 sticky top-0 z-50 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
            <button className="go-back-button" onClick={handleGoBack}>
              <img src='https://www.watercadetennis.com/wp-content/uploads/2023/05/Stark-Electronics-Logo.png'
               width={120} 
               height={50}
              
              ></img>
            </button>
                <Link to="/AdminDashboard" className={`text-2xl font-bold ${isActive('/AdminDashboard')}`}>Technician Dashboard</Link>
                <nav>
                    {/* <Link to="/reqs" className={` font-bold mr-4 ${isActive('/reqs')}`}>Requests</Link>
                    <Link to="/assign" className={` font-bold mr-4 ${isActive('/assign')}`}>Technicians</Link> */}
                    {/* <Link to="/login" className="text-white">Login</Link> */}
                   <button onClick={handleLogout}><Link to="/" className=" text-white   text-gray-200">
                                  LogOut  ⬅
                                  {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 mr-4" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg> */}
                              </Link></button> 
                </nav>
            </div>
        </header>
    );
};

export default TechNav;
