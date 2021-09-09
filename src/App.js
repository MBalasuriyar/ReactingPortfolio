// import React from "react";
import React from 'react';
import './App.css'
import Header from './components/pages/header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from './components/pages/index';
import Work from './components/pages/work';
import Contact from './components/pages/contact';
import About from './components/pages/about';
import Footer from './components/pages/footer/footer';

function App() {
  return (
    <>
      <Router basename='/reactportfolio'>
        <Header />
        <Switch>
          <Route path='/' exact component={Index}/>
          <Route path='/Work' exact component={Work}/>
          <Route path='/Contact' exact component={Contact}/>
          <Route path='/About' exact component={About}/>
        </Switch>
        <Footer />
      </Router>
      
    </>
  );
}

export default App;