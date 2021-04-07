import React from 'react'
import Home from "../src/components/home/home"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Route path="src/components/home/home.js">
    <Home />
    </Route>
    
  );
}

export default App;
