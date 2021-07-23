import React, { useState } from 'react'
import { Button, ButtonToolbar, Card, CardBody, Col } from 'reactstrap'
import PropTypes from 'prop-types'
import EyeIcon from 'mdi-react/EyeIcon'
import { useTranslation } from 'react-i18next'
import { SelectField } from '@/shared/components/form/Select'
import { emailPatter, urlPattern } from '@/shared/helpers'
import showResults from './Show'
import { FormField } from './FormFieldAddBlog'
import { useForm, Controller } from 'react-hook-form'
import { FileInputField } from '@/shared/components/form/FileInput'
import MultiSelect from 'react-multi-select-component'
import TextEditor from './TextEditor'
import { useDispatch, useSelector } from 'react-redux'
import { blogsUpdate } from '../../../redux/actions/authActions'

import {
  editBlogList,
  getBlogsList,
  getInterestsList,
  uploadRawFile,
} from '../../../utils/api/APIServices'

import '../Blogs.css'

const FormEditBlog = ({ isHorizontal, isAboveError, item }) => {
  const { t } = useTranslation('common')
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm()

  const showPassword = () => {
    setIsPasswordShown((prevState) => !prevState)
  }

  const onSubmit = (data) => {
    // showResults(data)
    console.log('data==', data)
  }

  const options = [
    { label: 'Category 1', value: 'Category 1' },
    { label: 'Category 2', value: 'Category 2' },
    { label: 'Category 3', value: 'Category 3' },
    { label: 'Category 4', value: 'Category 4' },
    { label: 'Category 5', value: 'Category 5', disabled: true },
  ]

  const [selected, setSelected] = useState([])

  const [modal, setModal] = useState(false)
  const [title, setTitle] = useState('')
  const token = useSelector((state) => state.user.token)
  const dispatch = useDispatch()
  const toggle = () => {
    // onEditClick()
    console.log('____item', item)
    setTitle(item.title)
    setModal((prevState) => !prevState)
  }

  const handleSave = async () => {
    // console.log('about',values)
    var values = { title: title }
    // setShowLoader(true)
    const { response, error } = await editBlogList(values, token, item.id)
    console.log('response, error ', response, error, values, token, item.id)
    // setShowLoader(false)
    if (error) {
      setModal((prevState) => !prevState)
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
      // setSnackBarLabel('Updated Successfully')
      // setSnackBarVisible(true)
      // getInterestsList()
      // document.location.reload(true)
      dispatch(blogsUpdate())
      setModal((prevState) => !prevState)
    } else {
      // setSnackBarLabel(response.message)
      // setSnackBarVisible(true)
    }
  }

  return (
    <Col md={12} lg={12} xl={12} className="AddblogForm pr-0">
      <Card>
        <CardBody>
          {/* <div className="card__title">
            <h5 className="bold-text">{t('tables.form_add_blog.horizontal_form_validate')}</h5>
            <h5 className="subhead">
              {
                isAboveError
                  ? (
                    <span>Errors are above fields, use class super
                      <span className="red-text"> form__form-group-input-wrap--error-above</span>
                    </span>
                  )
              : 'Errors are under fields'
              }
            </h5>
          </div> */}
          <form
            className={`form ${isHorizontal && 'form--horizontal'}`}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form__form-group col-md-4 pl-0">
              <span className="form__form-group-label">Title</span>
              <div className="form__form-group-field">
                <FormField
                  name="title"
                  control={control}
                  component="input"
                  errors={errors}
                  rules={{ required: 'This is required field' }}
                  defaultValue=""
                  isAboveError={isAboveError}
                  placeholder="Title"
                  value={title}
                  // onChange={(event) => setTitle(event.target.value)}
                />
              </div>
            </div>
            <div className="form__form-group col-md-4">
              <span className="form__form-group-label">Category</span>
              <div className="form__form-group-field">
                {/* <pre>{JSON.stringify(selected)}</pre> */}
                <MultiSelect
                  options={options}
                  value={selected}
                  onChange={setSelected}
                  labelledBy="Select"
                />
              </div>
            </div>

            {/* <div className="form__form-group col-md-4">
              <span className="form__form-group-label">Category ss</span>
              <div className="form__form-group-field">
                <FormField
                  name="select"
                  control={control}
                  component={SelectField}
                  errors={errors}
                  options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                  ]}
                  rules={{ required: 'This is required field' }}
                  defaultValue=""
                  isAboveError={isAboveError}
                />
              </div>
            </div> */}
            <div className="form__form-group col-md-4">
              <span className="form__form-group-label">Add Image</span>
              <div className="form__form-group-field">
                <Controller
                  name="image"
                  control={control}
                  render={({ field }) => <FileInputField {...field} />}
                />
              </div>
            </div>

            <div className="form__form-group">
              <span className="form__form-group-label">Description</span>
              <div className="form__form-group-field">
                <TextEditor onChange={() => {}} />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Source Url</span>
              <div className="form__form-group-field">
                <FormField
                  name="url"
                  control={control}
                  component="input"
                  errors={errors}
                  rules={{
                    required: 'This is required field',
                    pattern: {
                      value: urlPattern,
                      message: 'invalid url',
                    },
                  }}
                  placeholder="Source Url"
                  defaultValue=""
                  isAboveError={isAboveError}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Author</span>
              <div className="form__form-group-field">
                <FormField
                  name="author"
                  control={control}
                  component="input"
                  errors={errors}
                  rules={{ required: 'This is required field' }}
                  defaultValue=""
                  isAboveError={isAboveError}
                  placeholder="Author"
                />
              </div>
            </div>

            <ButtonToolbar className="form__button-toolbar">
              <Button color="primary" type="submit">
                Update Blog
              </Button>
              <Button
                type="button"
                onClick={() =>
                  reset({
                    username: '',
                    email: '',
                    url: '',
                    password: '',
                    select: '',
                  })
                }
              >
                Cancel
              </Button>
            </ButtonToolbar>
          </form>
        </CardBody>
      </Card>
    </Col>
  )
}

FormEditBlog.propTypes = {
  isHorizontal: PropTypes.bool,
  isAboveError: PropTypes.bool,
}

FormEditBlog.defaultProps = {
  isHorizontal: false,
  isAboveError: false,
}

export default FormEditBlog
