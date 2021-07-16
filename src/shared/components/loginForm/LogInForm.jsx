import React, { useState } from 'react';
import {
  Field,
  reduxForm,
  Form,
  SubmissionError,
} from 'redux-form';
import { connect } from 'react-redux';
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import { NavLink, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Alert, Button } from 'reactstrap';
import renderCheckBoxField from '../form/CheckBox';
import { logInUser } from '../../../utils/api/APIServices';


const LogInForm = ({
  handleSubmit, errorMessage, errorMsg, fieldUser, typeFieldUser, form,
}) => {
  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);
  const [iserror, setError] = useState({});


  // const validation = (field, values) => {

  //   if (!values) {
  //     errors = field + ' is required'
  //   }
  //   return errors
  // };

  const showPasswordToggle = () => {
    setShowPassword(!showPassword);
  };



  const onSubmit = async (data) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const Iserror = {
      email: '',
      username: '',
      error: false,
    };
    const { Email, password } = data;
    console.log('data', data);
    if (!Email) {
      Iserror.email = 'Email is required';
      Iserror.error = true;
    } else if (!re.test(Email)) {
      Iserror.email = 'email must be a valid email';
      Iserror.error = true;
    }
    if (!password) {
      Iserror.password = 'Password is required';
      Iserror.error = true;
    }

    if (!Iserror.error) {
      const payload = {
        email: Email,
        password,
      };

      const { response, error } = await logInUser(payload);
      if (error) {
        console.log('Error Login', error);
        const err = error.response ? error.response.data : '';
        if (err && err.data && err.data.length > 0) {
          alert(err.data[0].msg);
          return;
        }
        if (err && err.message) {
          alert(err.message);
          return;
        }
        alert(`Something went wrong. ${error.messag}`);
        // setSnackBarLabel('Something went wrong. ' + error.message)
        // setSnackBarVisible(true)
        return;
      }
      if (response.status) {
        alert('Logged in Successfully');
        const path = '/online_marketing_dashboard';
        history.push(path);
        // props.history.push('/dashboard');
      } else {
        alert(response.message);
      }
      // console.log('response', { response, error });
    }
    setError(Iserror);
    // if (error.error) {
    //   
    // } else if (!error.error) {
    //   console.log('error');
    // }
  };

  return (
    <Form className="form login-form" onSubmit={handleSubmit(onSubmit)}>
      <Alert
        color="danger"
        isOpen={!!errorMessage || !!errorMsg}
      >
        {errorMessage}
        {errorMsg}
      </Alert>
      <div className="form__form-group">
        <span className="form__form-group-label">{fieldUser}</span>
        <div className="form__form-group-field">
          <div className="form__form-group-icon">
            <AccountOutlineIcon />
          </div>
          <Field
            name="Email"
            component="input"
            type={typeFieldUser}
            placeholder={fieldUser}
            className="input-without-border-radius"
          />
        </div>
        <p className="MuiFormHelperText-root Mui-error">{iserror.email}</p>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">Password</span>
        <div className="form__form-group-field">
          <div className="form__form-group-icon">
            <KeyVariantIcon />
          </div>
          <Field
            name="password"
            component="input"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="input-without-border-radius"
          />
          <button
            type="button"
            className={`form__form-group-button${showPassword ? ' active' : ''}`}
            onClick={showPasswordToggle}
          ><EyeIcon />
          </button>
          <div className="account__forgot-password">
            <NavLink to="/reset_password">Forgot a password?</NavLink>
          </div>
        </div>
        <p className="MuiFormHelperText-root Mui-error">{iserror.password}</p>
      </div>
      <div className="form__form-group">
        <div className="form__form-group form__form-group-field">
          <Field
            name={`remember_me-${form}`}
            component={renderCheckBoxField}
            label="Remember me"
          />
        </div>
      </div>
      <div className="account__btns">
        {
          form === 'modal_login'
            ? <Button className="account__btn" type="submit" color="primary">Sign In</Button>
            : (
              <Button className="account__btn" type="submit" color="primary">Sign In</Button>
              // <NavLink
              //   className="account__btn btn btn-primary"
              //   to="#"
              //   role="button"
              // // to="/online_marketing_dashboard"
              // >
              //   Sign In
              // </NavLink>
            )
        }

        {/* <NavLink className="btn btn-outline-primary account__btn" to="/register">Create
          Account
        </NavLink> */}
      </div>
    </Form>
  );
};

LogInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  errorMsg: PropTypes.string,
  fieldUser: PropTypes.string,
  typeFieldUser: PropTypes.string,
  form: PropTypes.string.isRequired,
};

LogInForm.defaultProps = {
  errorMessage: '',
  errorMsg: '',
  fieldUser: 'Username',
  typeFieldUser: 'text',
};

export default connect(state => ({
  errorMsg: state.user.error,
}))(reduxForm({
  form: 'loginForm',
})(LogInForm));
