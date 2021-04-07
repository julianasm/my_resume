import React from 'react'
import Home from "../src/components/home/home"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Route path="/home">
    <Home />
    </Route>
    
  );
}

export default App;
