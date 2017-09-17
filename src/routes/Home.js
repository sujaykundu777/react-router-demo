import React, { Component } from 'react';
import logo from '../img/logo.jpg';
import '../styles/style.css';
import { Link } from 'react-router-dom';


class Home extends Component {
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
          <h2>Sujay Kundu</h2>
          <h4> Web Developer , UI/UX Designer </h4>

          <h1> Welcome to React Router Demo </h1>
          <p className="App-intro">
          Clone the repo to Get Started
          <li className="steps">$ git clone http://github.com/sujaykundu777/react-router-demo.git </li>
          <li className="steps">$ cd react-router-demo </li>
          <li className="steps">$ yarn start </li>
        </p>
        </div>
    
       
      </div>
    );
  }
}

export default Home;
