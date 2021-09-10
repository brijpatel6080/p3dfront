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
import Dashboard from "./screen/Dashboard/Dashboard";
import("typeface-hk-grotesk");

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />

        <Switch>
          <Home />
          {/* <Route exact path="/Home" component={Home} /> */}
          {/* <Route exact path="/Dashboard" component={Dashboard} /> */}
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
