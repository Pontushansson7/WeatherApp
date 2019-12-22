import React, { Component } from 'react';
import '../../App.css';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() {
      return (
        <div>
          <div className="line"></div>
          <ul>
            <li className="goLeft"><NavLink to="/home">Home</NavLink></li>
            <li className="goRight1"><NavLink to="/apiweather">API Väder</NavLink></li>
            <li className="goRight2"><NavLink to="/apimessage">API Meddelanden</NavLink></li>
          </ul>
          <div className="line"></div>
        </div>
      );
    }
  }

  export default Navbar;