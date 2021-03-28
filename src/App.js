import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from "./components/pages/List";
import About from "./components/pages/About";
import Navbar from "./components/Layout/Navbar";
import Error from "./components/pages/Error"
import AddPatient from "./components/users/AddPatient";
import Update from "./components/users/Update";
import View from "./components/users/View";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/About" component={About}/>
  
        <Route exact path="/users/add" component={AddPatient}/>
        <Route exact path="/users/edit/:id" component={Update}/>
        <Route exact path="/users/:id" component={View}/>
        <Route component={Error}/>
        
      </Switch>
    </div>
  );
}

export default App;
 