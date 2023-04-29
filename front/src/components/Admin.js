import React from 'react';

const Admin = () => {
  return (
    <div>
      <nav className="navbar">
        <img src="logo.png" alt="Logo" />
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="">Admin</a></li>
        </ul>
        <button id="login">Sign Out</button>
      </nav>
      <main className="container">
        
        
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
      <section id="dashboard2">
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
      <section>
        <h2>Graphs</h2>
      </section>
        
      </main>
      <footer>
        <p>&copy; 2023 Equipo 3</p>
      </footer>
    </div>
  );
};

export default Admin;
