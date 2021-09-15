// admin import Start
import { HashRouter } from 'react-router-dom';
import './admin/scss/style.scss';
import './admin/assets/css/Custom.css';
import './admin/assets/css/Star.css';
// import Projects from './screen/projects/Projects';

// admin import End


import React, { useState, Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/css/Star.css";
import logo from "./logo.svg";
import "./App.css";
import Home from "./screen/home/Home";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import store from "./screen/home/reduxForm/store";
import Footer from "./components/Footer/Footer";
import Projects from "./admin/screen/projects/Projects";
import {
  TheContent,
  TheFooter,
  TheHeader,
  TheLayout,
  TheSidebar,
} from "./admin/containers";
// import '@coreui/dist/css/coreui.min.css'
import "bootstrap/dist/css/bootstrap.min.css";
import AppAdmin from "./admin/AppAdmin";

import("typeface-hk-grotesk");






function App() {
  var url = window.location.href;
  var filename = url.split("/").pop().split("#")[0].split("?")[0];
  // console.log("path_", filename);

  var ls = localStorage.getItem("user");
  // console.log('localstorage 123', ls);

  if (ls == 1) {
    return (
      <>
        {/* <Provider store={store}>
          <Router >
            <Switch>
              <Route exact path="/admin" component={AppAdmin} />
              <AppAdmin />
            </Switch>
          </Router>
        </Provider> */}

      <Provider store={store}>
        <HashRouter basename="/web/p3d/">
      {/* <HashRouter > */}
          <React.Suspense>
            <Switch>
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
            </Switch>
          </React.Suspense>
        </HashRouter>
      </Provider>
      </>
    );
  } else {
    return (
      <>
        <div className="Front">
          <Provider store={store}>
            <Router basename="/web/p3d/">
              <Header />
              <Switch>
                {/* <Home /> */}
                <Route exact path="/" component={Home} />
                {/* <AppAdmin /> */}
                {/* <Route exact path="/admin/dashboard" component={TheLayout} /> */}
              </Switch>
              <Footer />
            </Router>
          </Provider>
        </div>
      </>
    );
  }
}

export default App;
