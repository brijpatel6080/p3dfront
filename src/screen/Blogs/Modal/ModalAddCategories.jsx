import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, ButtonToolbar, Modal } from 'reactstrap'
import classNames from 'classnames'
import { RTLProps } from '@/shared/prop-types/ReducerProps'
import { useSelector, useDispatch } from 'react-redux'
import { addInterestsList } from '../../../utils/api/APIServices'

import '../Blogs.css'
import { blogsUpdate } from '../../../redux/actions/authActions'

const ModalComponent = ({
  color,
  btn,
  title,
  message,
  colored,
  header,
  rtl,
}) => {
  const [modal, setModal] = useState(false)
  const [name, setName] = useState('')
  const token = useSelector((state) => state.user.token)
  const dispatch = useDispatch()

  const toggle = () => {
    setModal((prevState) => !prevState)
  }

  const handleSave = async () => {
    var values = { name: name }

    // setShowLoader(true)
    const { response, error } = await addInterestsList(values, token)
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
      dispatch(blogsUpdate())

      // setSnackBarLabel('Added Successfully')
      // setSnackBarVisible(true)
      // getInterestsList()
      // setTimeout(()=>{
      //   props.history.push('/dashboard/blog-cats/list')
      // }, 2000)
    } else {
      // setSnackBarLabel(response.message)
      // setSnackBarVisible(true)
    }
  }

  let Icon

  switch (color) {
    case 'primary':
      Icon = <span className="lnr lnr-pushpin modal__title-icon" />
      break
    case 'success':
      Icon = <span className="lnr lnr-thumbs-up modal__title-icon" />
      break
    case 'warning':
      Icon = <span className="lnr lnr-flag modal__title-icon" />
      break
    case 'danger':
      Icon = <span className="lnr lnr-cross-circle modal__title-icon" />
      break
    default:
      break
  }
  const modalClass = classNames({
    'modal-dialog--colored': colored,
    'modal-dialog--header': header,
  })

  return (
    <div>
      <Button color={color} onClick={toggle}>
        {btn}
      </Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        modalClassName={`${rtl.direction}-support`}
        className={`modal-dialog--${color} ${modalClass}`}
      >
        <div className="modal__header">
          <button
            className="lnr lnr-cross modal__close-btn"
            aria-label="modal__close-btn"
            type="button"
            onClick={toggle}
          />
          {header ? '' : Icon}
          <h4 className="text-modal  modal__title">{title}</h4>
        </div>
        <div className="modal__body Category">
          {/* {message} */}

          <div class="card pb-0">
            <div class="card-body pb-0 pr-0">
              <form class="form false">
                <div class="form__form-group">
                  <span class="form__form-group-label">Name</span>
                  <div class="form__form-group-field">
                    <div class="form__form-group-input-wrap ">
                      <input
                        name="category"
                        rules="[object Object]"
                        placeholder="Name"
                        value={name}
                        class="table__search table__search-input form-control"
                        onChange={(event) => setName(event.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <ButtonToolbar className="modal__footer pr-0 mb-10 mt-40">
                  <Button
                    className="modal_ok"
                    outline={colored}
                    color={color}
                    onClick={handleSave}
                  >
                    Add Category
                  </Button>
                  <Button className="modal_cancel" onClick={toggle}>
                    Cancel
                  </Button>{' '}
                </ButtonToolbar>

                {/* <div role="toolbar" class="form__button-toolbar btn-toolbar">
                    <button type="submit" class="btn btn-primary">Add Category</button>
                    <button type="button" class="btn btn-secondary">Cancel</button>
                  </div> */}
              </form>
            </div>
          </div>
        </div>
        {/* <ButtonToolbar className="modal__footer">
          <Button className="modal_cancel" onClick={toggle}>Cancel</Button>{' '}
          <Button className="modal_ok" outline={colored} color={color} onClick={toggle}>Ok</Button>
        </ButtonToolbar> */}
      </Modal>
    </div>
  )
}

ModalComponent.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  color: PropTypes.string.isRequired,
  colored: PropTypes.bool,
  header: PropTypes.bool,
  btn: PropTypes.string.isRequired,
  rtl: RTLProps.isRequired,
}

ModalComponent.defaultProps = {
  title: '',
  message: '',
  colored: false,
  header: false,
}

export default connect((state) => ({
  rtl: state.rtl,
}))(ModalComponent)
