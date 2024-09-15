import React from 'react'
import { Link } from 'react-router-dom';
function Appbar() {
    const navigation = [
        { title: "About us", path: "#about" },
        { title: "Contact us", path: "#contact" },
    ]
    
      return (
          <div className="bg-blue-200">
              <header className='bg-blue-700'>
                  <nav className="items-center pt-5 pb-2 px-4 mx-auto max-w-screen-2xl sm:px-8 sm:flex sm:space-x-6 ">
                      <a href="/">
                          <img
                            //   src="https://static.vecteezy.com/system/resources/previews/013/211/080/non_2x/online-auction-technology-png.png" 
                            src='https://www.watercadetennis.com/wp-content/uploads/2023/05/Stark-Electronics-Logo.png'
                              width={120} 
                              height={50}
                              alt="logo"
                          />
                      </a>
                      <ul className="py-4 flex-1 items-center flex space-x-3 sm:space-x-6 sm:justify-end">
                          {
                              navigation.map((item, idx) => (
                                  <li className="text-gray-200" key={idx}>
                                      <a href={item.path}>{item.title}</a>
                                  </li>
                              ))
                          }
                          <li>
                              <a href="/login" className="flex items-center text-gray-200">
                                  Log In
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                              </a>
                          </li>
                      </ul>
                  </nav>
              </header>
              <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8 bg-blue-200">
                  <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                      <h1 className=" font-bold text-4xl xl:text-5xl">
                           <span >Customer Support Service </span> 
                          <br></br> <br></br><hr></hr>
                           <span className="text-indigo-800"> Home Appliances</span>
                      </h1>
                      <p className="text-blue-700 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                      Your Trusted Partner in Home Appliances! At our showroom, we prioritize your satisfaction. Our knowledgeable staff is here to guide you through our extensive selection of premium electronic appliances. Get personalized recommendations and exceptional service every step of the way. Come in and let us help you find exactly what you need!
                      </p>
                      <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                          <a href="/login" className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto">
                              Get started
                          </a>
                          <Link to="/signup" className="px-7 py-3 w-full bg-gray-700 text-gray-200 text-center rounded-md block sm:w-auto">
                              Signup
                          </Link>
                      </div>
                  </div>
                  <div className="flex-1 text-center mt-2 ml-5 lg:mt-0 lg:ml-5 mt-2">
                     <img src ='https://png.pngtree.com/png-vector/20220725/ourmid/pngtree-flat-handyman-masters-group-repair-broken-electrical-appliances-png-image_6065604.png'></img>
                      {/* <img src="https://static.vecteezy.com/system/resources/previews/017/205/538/non_2x/auction-businessman-makes-a-bid-at-an-online-auction-vector.jpg" className="w-full mx-auto sm:w-10/12  lg:w-full" /> */}
                  </div>
              </section>
          </div>
      )
}

export default Appbar

  