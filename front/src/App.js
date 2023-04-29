import React, {useState} from "react";
import "./index.css";
import logo from './logo.png';
import ScoreListView from "./paginas/ScoreListView";
// import {BrowserRouter, Route, Routes} from "react-router-dom";
import { BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom';




import LoginV from "./paginas/LoginV";
import Admin from './components/Admin';
import Home from './components/Home';

//Use npm install . before running the app
function App() {
  

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  }

  const Home = () => {
    return (
      <main className="container">
        <section id="about">
        <h2>About Us</h2>
        <p>Our team is made up of individuals with diverse backgrounds and skillsets, united by a shared passion for technology and a commitment to excellence. We have put our heads together to create two exciting simulators for Regal Rednox: an escape room type simulator and a 2D runner simulator. These simulators provide a realistic and engaging environment in which employees can practice identifying and responding to potential hazards.

         </p><p>We take pride in our work and are committed to delivering a high-quality product that meets the unique needs of our clients. We understand the importance of safety in the workplace, and we are excited to be part of a project that has the potential to make a real difference in the lives of Regal Rednox employees.
          
         </p><p>Thank you for taking the time to visit our website and learn more about our team and our project. If you have any questions or would like to learn more about our work, please don't hesitate to get in touch. We look forward to hearing from you!</p>
      </section>
      
      <section id="dashboard">
        <h2>Dashboard Engine Escape</h2>
        <table>
          <thead>
            <tr>
              <th>EmployeeID</th>
              <th>EmployeeName</th>
              <th>Score</th>
              <th>Games played</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>John Doe</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="Graph">
        <h2>Graphs</h2>
        <table>
          <thead>
            <tr>
              <th>EmployeeID</th>
              <th>EmployeeName</th>
              <th>Score</th>
              <th>Games played</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>John Doe</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </section>
      </main>
    );
  };

  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/scores" element={<ScoreListView/>}></Route>
      <Route path="/login" element={<LoginV/>}></Route>
      </Routes>
      </BrowserRouter>

      <BrowserRouter>
      <nav className="navbar">
        <img src="logo.png" alt="Logo" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#about">About</Link>
          </li>
          <li>
            <Link to="#dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
        <button id="login">Sign Out</button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <footer>
        <p>&copy; 2023 Equipo 3</p>
      </footer>
    </BrowserRouter>


    </div>
  );
}




export default App;
