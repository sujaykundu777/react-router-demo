import React, { Component } from 'react';
import logo from '../img/logo.jpg';
import '../styles/style.css';
import { Link } from 'react-router-dom';


class Portfolio extends Component {
  render() {
    return (
      <div className="App">
      <div className="App-Nav">
      <Link className="menu-buttons" to="/" >Home</Link>
      <Link className="menu-buttons" to="/about">About</Link>
      <Link className="menu-buttons" to="/portfolio" >Portfolio</Link>
      <Link className="menu-buttons" to="/contact" >Contact</Link>
      </div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Portfolio</h2>
          <p className="App-intro">
            
          Where you can add some of your projects !
        
        </p>
        </div>
       
      
      </div>
    );
  }
}

export default Portfolio;
