import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';
import './assets/css/Custom.css';
import './assets/css/Star.css';
// import Projects from './screen/projects/Projects';
import TheLayout from './containers/TheLayout';


// const loading = (
//   <div className="pt-3 text-center">
//     <div className="sk-spinner sk-spinner-pulse"></div>
//   </div>
// )

// Containers
// const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
// const Login = React.lazy(() => import('./views/pages/login/Login'));
// const Register = React.lazy(() => import('./views/pages/register/Register'));
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
// const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

// const Projects = React.lazy(() => import('./screen/projects/Projects'));
// const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));


class AppAdmin extends Component {

  render() {
    return (
      <HashRouter basename="/web/p3d/l2/">
      {/* <HashRouter > */}
          {/* <React.Suspense fallback={loading}> */}
          <React.Suspense>
            <Switch>
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
              {/* <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route exact path="/Projects" name="Projects Page" render={props => <Projects {...props}/>} />
              <Route exact path="/Dashboard" name="Dashboard Page" render={props => <Dashboard {...props}/>} /> */}
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default AppAdmin;
