import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Authroute from './Component/Authroute';
import Login from './Component/Login';
import ProtectedRoute from './Component/ProtectedRoute';
import Dashboard from './Component/Dashboard';
import Errorpage from './Component/Errorpage';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Register from './Component/Register';
import { useEffect, useState } from 'react';
import ShowUserData from './Component/ShowUserData';
import JsonUser from './Component/JsonUser';
import UserDetails from './Component/UserDetails';
import JsonSingleData from './Component/JsonSingleData';
import AddToCart from './Component/AddToCart';


function App() {
  const isLoggedIn = localStorage.getItem('token')

  console.log('isLoggedIn', isLoggedIn)

  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </BrowserRouter> */}

      {/* <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='*' element={<Errorpage />} />
          </Route>
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/showuserdata' element={<ShowUserData />} />
          <Route path='/jsonUser' element={<JsonUser />} />
          <Route path={'/userDetails/:id'} element={<UserDetails />} />
          <Route path={'/jsonSingleData/:id'} element={<JsonSingleData />} />
          <Route path='/addToCart' element={<AddToCart />} />
          <Route path='*' element={<Errorpage />} />
          <Route path='/dashboard' element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </ProtectedRoute>
          }
          />

          {/* <Route element={<Authroute />}>
            <Route path='/' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
          </Route>
          <Route element={<ProtectedRoute  />}>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Route>
          <Route path='*' element={<Errorpage />}></Route>
        </Routes> */}
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
