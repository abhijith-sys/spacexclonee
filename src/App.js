import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import HomePage from "./features/Home/HomePage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import LaunchesListPage from "./features/Launches/LaunchesListPage";
import LaunchDetails from "./features/LaunchDetails/LaunchDetails";
import MissionList from "./features/Mission/MissionListPage";
import MissionDetails from "./features/MissionDetails/MissionDetailsPage";
import ShipList from "./features/ShipList/ShipList";
import ShipDetail from "./features/ShipDetails/ShipDetails";
function App() {
  return (
    <Router>
      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}
        {/* <HomePage /> */}
        <Routes>
          <Route path="/"  element={<HomePage/>} />
          <Route path="/launcheList"  element={<LaunchesListPage/>} />
          <Route path="/launches/:flightNumber" element={<LaunchDetails/>} />
          <Route path="/MissionList"  element={<MissionList/>} />
          <Route path="/missions/:missionsId" element={<MissionDetails/>} />
          <Route path="/ShipList"  element={<ShipList/>} />
          <Route path="/ships/:shipsId" element={<ShipDetail/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
