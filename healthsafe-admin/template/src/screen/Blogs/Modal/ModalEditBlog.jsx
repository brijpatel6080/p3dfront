import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, ButtonToolbar, Modal } from 'reactstrap'
import Buttoncore from '@material-ui/core/Button'
import classNames from 'classnames'
import { RTLProps } from '@/shared/prop-types/ReducerProps'
import AccountEditOutlineIcon from 'mdi-react/AccountEditOutlineIcon'
import '../Blogs.css'
import EditBlog from '../EditBlog'
const ModalEditBlog = ({
  color,
  btn,
  title,
  message,
  colored,
  header,
  rtl,
  item,
}) => {
  const [modal, setModal] = useState(false)
  const toggle = () => {
    setModal((prevState) => !prevState)
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
  var data = item.cell.row.original
  //   console.log('item__item', item.cell.row.original)
  return (
    <div>
      <Buttoncore className="btn edit mr-10" color={color} onClick={toggle}>
        <p>
          <AccountEditOutlineIcon />
          Edit
        </p>
      </Buttoncore>
      <Modal
        isOpen={modal}
        toggle={toggle}
        modalClassName={`${rtl.direction}-support`}
        className={`EditBlog modal-dialog--${color} ${modalClass}`}
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

        <div className="modal__body ">
          {/* {message} */}
          <div class="card pb-0">
            <div class="card-body pb-0 pr-0 p-0">
              <EditBlog onSuccess={toggle} data={data} />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
ModalEditBlog.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  color: PropTypes.string.isRequired,
  colored: PropTypes.bool,
  header: PropTypes.bool,
  btn: PropTypes.string.isRequired,
  rtl: RTLProps.isRequired,
}
ModalEditBlog.defaultProps = {
  title: '',
  message: '',
  colored: false,
  header: false,
}
export default connect((state) => ({
  rtl: state.rtl,
}))(ModalEditBlog)
