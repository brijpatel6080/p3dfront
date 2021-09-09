import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../assets/css/Star.css";
import "./assets/css/Custom.css";
import logo from "../logo.svg";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./screen/Projects/Projects";

import("typeface-hk-grotesk");

function Dashboard() {
  return (
    <Router>
      <Header />

      <Switch>
        <div className="dashboard">
          <Projects />
          {/* <Route exact path="/Projects" component={Projects} /> */}
          {/* <Route exact path="/Dashboard" component={Dashboard} /> */}
        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default Dashboard;
