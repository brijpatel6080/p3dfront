import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, ButtonToolbar, Modal } from "reactstrap";
import Buttoncore from "@material-ui/core/Button";
import classNames from "classnames";
import { RTLProps } from "@/shared/prop-types/ReducerProps";
import AccountEditOutlineIcon from "mdi-react/AccountEditOutlineIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  updateInterestsList,
  getInterestsList,
} from "../../../utils/api/APIServices";

import "../Blogs.css";
import {
  blogsUpdate,
  user_error_action,
} from "../../../redux/actions/authActions";
const ModalComponent = ({
  color,
  btn,
  title,
  message,
  colored,
  header,
  rtl,
  item,
}) => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const toggle = () => {
    // onEditClick()
    console.log("____item", item);
    setName(item.name);
    setModal((prevState) => !prevState);
  };

  const handleSave = async () => {
    // console.log('about',values)
    var values = { name: name };
    // setShowLoader(true)
    const { response, error } = await updateInterestsList(
      values,
      token,
      item.id
    );
    console.log("response, error ", response, error, values, token, item.id);
    // setShowLoader(false)
    if (error) {
      setModal((prevState) => !prevState);
      const err = error.response ? error.response.data : "";
      if (err && err.data && err.data.length > 0) {
        dispatch(
          user_error_action({
            show: true,
            msg: err.data[0].msg,
            type: "danger",
          })
        );
        return;
      } else if (err && err.message) {
        dispatch(
          user_error_action({
            show: true,
            msg: err.message,
            type: "danger",
          })
        );
        return;
      }
      dispatch(
        user_error_action({
          show: true,
          msg: "Something went wrong. " + error.message,
          type: "danger",
        })
      );
      return;
    }
    if (response.status) {
      dispatch(
        user_error_action({
          show: true,
          msg: "Updated Successfully",
          type: "success",
        })
      );
      dispatch(blogsUpdate());
      setModal((prevState) => !prevState);
    } else {
      dispatch(
        user_error_action({
          show: true,
          msg: response.message,
          type: "success",
        })
      );
    }
  };
  let Icon;
  switch (color) {
    case "primary":
      Icon = <span className="lnr lnr-pushpin modal__title-icon" />;
      break;
    case "success":
      Icon = <span className="lnr lnr-thumbs-up modal__title-icon" />;
      break;
    case "warning":
      Icon = <span className="lnr lnr-flag modal__title-icon" />;
      break;
    case "danger":
      Icon = <span className="lnr lnr-cross-circle modal__title-icon" />;
      break;
    default:
      break;
  }
  const modalClass = classNames({
    "modal-dialog--colored": colored,
    "modal-dialog--header": header,
  });
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
        className={`modal-dialog--${color} ${modalClass}`}
      >
        <div className="modal__header">
          <button
            className="lnr lnr-cross modal__close-btn"
            aria-label="modal__close-btn"
            type="button"
            onClick={toggle}
          />
          {header ? "" : Icon}
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
                        value={name}
                        name="category"
                        rules="[object Object]"
                        placeholder="Name"
                        // value=""
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
                    Update Category
                  </Button>
                  <Button className="modal_cancel" onClick={toggle}>
                    Cancel
                  </Button>{" "}
                </ButtonToolbar>
                {/* 
                <div role="toolbar" class="form__button-toolbar btn-toolbar">
                  <button type="submit" class="btn btn-primary">Add Category</button>
                  <button type="button" class="btn btn-secondary">Cancel</button>
                </div>
                */}
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
ModalComponent.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  color: PropTypes.string.isRequired,
  colored: PropTypes.bool,
  header: PropTypes.bool,
  btn: PropTypes.string.isRequired,
  rtl: RTLProps.isRequired,
};
ModalComponent.defaultProps = {
  title: "",
  message: "",
  colored: false,
  header: false,
};
export default connect((state) => ({
  rtl: state.rtl,
}))(ModalComponent);
