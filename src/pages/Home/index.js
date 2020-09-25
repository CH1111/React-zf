import React, { Component } from "react";
import { Route } from "react-router-dom";
import Profile from "../Profile";
import Index from "../Index";
import News from "../News";
import HouseList from "../HouseList";
// import { Button } from "antd-mobile";

class Home extends Component {
  render() {
    return (
      <div>
        <h3>这是首页</h3>
        <Route path="/home/index" component={Index} />
        <Route path="/home/houselist" component={HouseList} />
        <Route path="/home/news" component={News} />
        <Route path="/home/profile" component={Profile} />
      </div>
    );
  }
}

export default Home;
