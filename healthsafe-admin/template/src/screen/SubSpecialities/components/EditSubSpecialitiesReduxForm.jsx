import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Field, reduxForm } from 'redux-form'
import { Card, CardBody, Col, Button, ButtonToolbar } from 'reactstrap'
import EyeIcon from 'mdi-react/EyeIcon'
import renderSelectField from '@/shared/components/form/Select'
import validate from './validateRedux'
import renderMultiSelectField from '@/shared/components/form/MultiSelect'
import renderFileInputField from '@/shared/components/form/FileInput'
import { getInterestsList, addBlogList } from '../../../utils/api/APIServices'
import { useSelector, useDispatch } from 'react-redux'
import { blogsUpdate } from '../../../redux/actions/authActions'
import { useHistory } from "react-router-dom";

const renderField = ({
  input,
  placeholder,
  type,
  meta: { touched, error },
}) => (
  <div className="form__form-group-input-wrap">
    <input {...input} placeholder={placeholder} type={type} />
    {touched && error && (
      <span className="form__form-group-error">{error}</span>
    )}
  </div>
)

renderField.propTypes = {
  input: PropTypes.shape().isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
}

renderField.defaultProps = {
  placeholder: '',
  meta: null,
  type: 'text',
}

const VerticalForm = ({
  handleSubmit,
  pristine,
  reset,
  submitting,
  onSuccess,
}) => {
  const { t } = useTranslation('common')
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [interestList, setInterestList] = useState([])
  const token = useSelector((state) => state.user.token)
  const dispatch = useDispatch()
  const showPassword = () => {
    setIsPasswordShown(!isPasswordShown)
  }
  useEffect(() => {
    ; (async function () {
      // setShowLoader(true)
      const { response, error } = await getInterestsList(token)
      console.log('response, error', { response, error })
      // setShowLoader(false)
      if (response.status) {
        var categoryData = response.data.map((data) => {
          return { value: data.name, label: data.name, ...data }
        })
        setInterestList(categoryData)
        // console.log('categoryData', categoryData)
        // { value: 'one', label: 'One' }
        // setInterestList(
        //   response.data.map((data) => {
        //     return { ...data, name: data.name }
        //   }),
        // )
      }
    })()
  }, [])

  // const submit = (data) => {
  //   // console.log('field data', data)
  //   handleSave()
  // }

  const handleSave = async (values) => {
    console.log('addImages', values)
    const payload = new FormData()
    payload.append('featured_image', values.Image.file)
    payload.append('title', values.Title)
    payload.append('description', values.Description)
    payload.append('source_url', values.url)
    if (values.Category && values.Category.length != 0) {
      values.Category.map((item_cat) => {
        payload.append('tags', item_cat._id)
      })
      // payload.append(
      //   'category',
      //   interestList.find((s) => s.name === values.Category[0].name)._id,
      // )
    }
    payload.append('author', values.Author)
    console.log('field_data', JSON.stringify(payload))
    // return false
    // setShowLoader(true)
    const { response, error } = await addBlogList(payload, token)
    console.log('response, error', response, error.response)
    // setShowLoader(false)
    if (error) {
      const err = error.response ? error.response.data : ''
      if (err && err.data && err.data.length > 0) {
        // setSnackBarLabel(err.data[0].msg)
        // setSnackBarVisible(true)
        return
      } else if (err && err.message) {
        // setSnackBarLabel(err.message)
        // setSnackBarVisible(true)
        return
      }
      // setSnackBarLabel('Something went wrong. ' + error.message)
      // setSnackBarVisible(true)
      return
    }
    if (response.status) {
      onSuccess()
      dispatch(blogsUpdate())
      // setSnackBarLabel('Added Successfully')
      // setSnackBarVisible(true)
      // getBlogsList()
      // setTimeout(()=>{
      //   props.history.push('/dashboard/blogs/list')
      // }, 2000)
    } else {
      // setSnackBarLabel(response.message)
      // setSnackBarVisible(true)
    }
  }

  // description, titile

  const history = useHistory();

  const routeChange = () => {
    let path = `SubSpecialitiesList`;
    history.push(path);
  }


  return (
    <Col md={12} lg={12} xl={12} className="pr-0">
      <Card>
        <CardBody>
          {/* <div className="card__title">
            <h5 className="bold-text">
              {t('forms.from_validation.vertical_form_validate')}
            </h5>
            <h5 className="subhead">Errors are under fields</h5>
          </div> */}

          <ButtonToolbar className="form__button-toolbar Back">
            <Button onClick={routeChange} color="primary" type="submit">
              View All Sub Specialities
            </Button>
          </ButtonToolbar>


          <form className="form" onSubmit={handleSubmit(handleSave)}>
            <div className="form__form-group col-md-8 pl-0">
              <span className="form__form-group-label">Name</span>
              <div className="form__form-group-field">
                <Field
                  name="name"
                  component={renderField}
                  type="text"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="form__form-group col-md-4">
              <span className="form__form-group-label">Image</span>
              <div className="form__form-group-field">
                <Field name="Image" component={renderFileInputField} />
              </div>
            </div>


            <div className="form__form-group">
              <span className="form__form-group-label">Role</span>
              <div className="form__form-group-field">
                <Field
                  name="role"
                  component={renderMultiSelectField}
                  options={interestList}
                // multiple={true}
                />
              </div>
            </div>


            <ButtonToolbar className="form__button-toolbar">
              <Button color="primary" type="submit">
                Add Sub Speciality
              </Button>
              <Button
                type="button"
                onClick={reset}
                disabled={pristine || submitting}
              >
                Clear
              </Button>
            </ButtonToolbar>
          </form>
        </CardBody>
      </Card>
    </Col>
  )
}

VerticalForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
}

export default reduxForm({
  form: 'vertical_form_validation', // a unique identifier for this form
  validate,
})(VerticalForm)
