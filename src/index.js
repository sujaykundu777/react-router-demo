import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './routes/Home.js';
import About from './routes/About.js';
import Contact from './routes/Contact.js';
import Portfolio from './routes/Portfolio.js';



ReactDOM.render(
   <Router>
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />

    </div>
</Router>
    , document.getElementById('root'));
registerServiceWorker();
