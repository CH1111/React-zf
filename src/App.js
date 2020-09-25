import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CityLists from "./pages/CityLists";
const App = () => {
  return (
    <Router>
      <div className="app">
        <ul>
          <li>
            <Link to="/home">租房首页</Link>
          </li>
          <li>
            <Link to="/citylists">城市选择</Link>
          </li>
        </ul>
        <Route path="/home" exact component={Home} />
        <Route path="/citylists" component={CityLists} />
      </div>
    </Router>
  );
};
export default App;
