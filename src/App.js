import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

import { Redirect, Route, Switch } from 'react-router-dom'
import About from './screens/About';
import Home from './screens/Home';
import Learning from './screens/Learning';
import Skills from './screens/Skills';
import Work from './screens/Work';
import Navbar from './nav/Navbar';
import Footer from './screens/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/learning" component={Learning} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
