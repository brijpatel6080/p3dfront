import React, { useState } from 'react';
import {
  Button,
  ButtonToolbar,
  Card,
  CardBody,
  Col,
} from 'reactstrap';
import PropTypes from 'prop-types';
import EyeIcon from 'mdi-react/EyeIcon';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { SelectField } from '@/shared/components/form/Select';
import { emailPatter, urlPattern } from '@/shared/helpers';
import showResults from './Show';
import { FormField } from './FormFieldAddCategories';
import { useHistory } from "react-router-dom";


const Form = ({ isHorizontal, isAboveError }) => {
  const { t } = useTranslation('common');
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const showPassword = () => {
    setIsPasswordShown(prevState => !prevState);
  };

  const onSubmit = data => showResults(data);

  const history = useHistory();

  const routeChange = () =>{ 
    let path = `BlogCategories`; 
    history.push(path);
  }

  return (
    <Col md={12} lg={12} xl={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            {/* <h5 className="bold-text">{t('forms.from_validation.horizontal_form_validate')}</h5> */}
            {/* <h5 className="subhead">
              {
                isAboveError
                  ? (
                    <span>Errors are above fields, use class super
                      <span className="red-text"> form__form-group-input-wrap--error-above</span>
                    </span>
                  )
              : 'Errors are under fields'
              }
            </h5> */}
            <Button onClick={routeChange} className="addCategory" color="primary">View All Categories</Button>
          </div>
          <form className={`form ${isHorizontal && 'form--horizontal'}`} onSubmit={handleSubmit(onSubmit)}>
            <div className="form__form-group">
              <span className="form__form-group-label">Name</span>
              <div className="form__form-group-field">
                <FormField
                  name="category"
                  control={control}
                  component="input"
                  errors={errors}
                  rules={{ required: 'This is required field' }}
                  defaultValue=""
                  isAboveError={isAboveError}
                  placeholder="Name"
                />
              </div>
            </div>
            
           
            
            
            <ButtonToolbar className="form__button-toolbar">
              <Button color="primary" type="submit">Add Category</Button>
              <Button
                type="button"
                onClick={() => reset({
                  category: '',
                  email: '',
                  url: '',
                  password: '',
                  select: '',
                })}
              >
                Cancel
              </Button>
            </ButtonToolbar>
          </form>
        </CardBody>
      </Card>
    </Col>
  );
};

Form.propTypes = {
  isHorizontal: PropTypes.bool,
  isAboveError: PropTypes.bool,
};

Form.defaultProps = {
  isHorizontal: false,
  isAboveError: false,
};

export default Form;
