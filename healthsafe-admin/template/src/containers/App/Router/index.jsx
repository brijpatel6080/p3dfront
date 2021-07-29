import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MainWrapper from '../MainWrapper';
import Landing from '../../Landing/index';
import NotFound404 from '../../DefaultPage/404/index';
import LockScreen from '../../Account/LockScreen/index';
import LogIn from '../../Account/LogIn/index';
import LogInPhoto from '../../Account/LogInPhoto/index';
import Register from '../../Account/Register/index';
import RegisterPhoto from '../../Account/RegisterPhoto/index';
import ResetPassword from '../../Account/ResetPassword/index';
import ResetPasswordPhoto from '../../Account/ResetPasswordPhoto';
import WrappedRoutes from './WrappedRoutes';
import { logIn } from '../../../redux/actions/userActions';

const Router = () => {
  const [isTokenLoaded, setTokenLoaded] = useState(false);
  const dispatch = useDispatch();
  const userInfo = useSelector(store => store.user);
  const { token } = userInfo;
  console.log('userInfo', userInfo);
  useEffect(() => {
    dispatch(logIn({}));
  }, []);

  useEffect(() => {
    if (token !== 'empty') {
      setTokenLoaded(true);
    }
  }, [token]);
  let IsreturnApp = <Landing />;
  if (isTokenLoaded) {
    if (token) {
      IsreturnApp = <AppNavigation />;
    } else {
      IsreturnApp = <AuthNavigation />;
    }
  }
  console.log('IsreturnApp', userInfo);
  return IsreturnApp;
};
// (
//   <MainWrapper>
//     <main>
//       <Switch>
//         {/* <Route exact path="/" component={Landing} /> */}
//         <Route exact path="/" component={LogIn} />
//         <Route path="/404" component={NotFound404} />
//         <Route path="/lock_screen" component={LockScreen} />
//         <Route path="/log_in" component={LogIn} />
//         <Route path="/log_in_photo" component={LogInPhoto} />
//         <Route path="/register" component={Register} />
//         <Route path="/register_photo" component={RegisterPhoto} />
//         <Route path="/reset_password" component={ResetPassword} />
//         <Route path="/reset_password_photo" component={ResetPasswordPhoto} />
//         <Route path="/" component={WrappedRoutes} />
//       </Switch>
//     </main>
//   </MainWrapper>
// );

function AppNavigation() {
  return (
    <MainWrapper>
      <main>
        <Switch>
          <Route path="/404" component={NotFound404} />
          <Route path="/lock_screen" component={LockScreen} />
          <Route path="/log_in_photo" component={LogInPhoto} />
          <Route path="/register" component={Register} />
          <Route path="/register_photo" component={RegisterPhoto} />
          <Route path="/reset_password" component={ResetPassword} />
          <Route path="/reset_password_photo" component={ResetPasswordPhoto} />
          <Route path="/" component={WrappedRoutes} />
        </Switch>
      </main>
    </MainWrapper>
  );
}

function AuthNavigation() {
  return (
    <>
      <MainWrapper>
        <main>
          <Switch>
            <Route path="/" component={LogIn} />
            <Redirect to="/" />
          </Switch>
        </main>
      </MainWrapper>
    </>
  );
}


export default Router;
