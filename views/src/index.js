import React from 'react';
import ReactDOM from 'react-dom/client';
import{BrowserRouter,Routes,Route} from "react-router-dom";
/* Auth */
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Resetpassword from './components/auth/Resetpassword';
import Forgetpassword from './components/auth/Forgetpassword';
import Changepassword from './components/auth/Changepassword';
/* User */
import Manager from './components/user/Manager'
import Livreur from './components/user/Livreur'
import Client from './components/user/Client'
/* Page Not Found */
import PageNotFound from './components/auth/PageNotFound';
/* Css &&  Bootstrap*/
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
        <Route path="/resetpassword" element={<Resetpassword />} />
        <Route path="/changepassword" element={<Changepassword />} />
        {/* User */}
        <Route path="/api/user/manager/me" element={<Manager />} />
        <Route path="/api/user/livreur/me" element={<Livreur />} />
        <Route path="/api/user/client/me" element={<Client />} />
        {/* Page Not Found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
