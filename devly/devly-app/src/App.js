import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TinderCards from "./TinderCards"
import SwipeButtons from "./SwipeButtons";
import ChatList from "./ChatList";
import SingleChat from "./SingleChat";
import User from "./SeeUser";


function App() {
  return (
    <div className="App">
      
      <Router>
       
        <Routes>
          <Route path="/chat" element={<><Header backButton="/"  /><ChatList /></>}>
          </Route>
          <Route path="/chat/:person" element={<><Header backButton="/chat" /><SingleChat /></>}>
          </Route>          
          <Route path="/" element={<><Header /><SwipeButtons /><TinderCards /></>}>
          </Route>
          <Route path="/user" element={<><Header/><User /></>}>
          </Route>
        </Routes>

      </Router>
     
    </div>
  );
}

export default App;
