import React, { useState } from "react";
import ReactDOM from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import FormEmailJs from "../../screen/home/FormEmailJs";
import { FaLongArrowAltRight, FaAngleRight } from "react-icons/fa";
import RequestDemoReduxForm from "../../screen/home/reduxForm/RequestDemoReduxForm";

const ModalBox = (props) => {
  const { btn, content, title } = props;
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <button className="btn btn-primary-desat lift" onClick={onOpenModal}>
        {btn}
        <FaLongArrowAltRight className="ml-10" />
      </button>
      <Modal open={open} onClose={onCloseModal} center>
        <div className="requestDemoModal pt-50">
          <div className="modalHead mb-20">
            <h2>{title}</h2>
          </div>
          <RequestDemoReduxForm onSubmitPress={onCloseModal} />
          {/* {content} */}
        </div>
        {/* <FormEmailJs /> */}
      </Modal>
    </div>
  );
};

export const ModalBoxPri = (props) => {
  const { btn, content, title, modalClass } = props;
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className={`signIn ${modalClass}`}>
      <button
        className="navbar-btn btn btn-sm btn-primary lift"
        onClick={onOpenModal}
      >
        {btn}
      </button>
      <Modal open={open} onClose={onCloseModal} center>
        <div className="modalHead">
          <h2 className="mb-0">{title}</h2>
        </div>
        {content}
        {/* <FormEmailJs /> */}
      </Modal>
    </div>
  );
};

export default ModalBox;
// ReactDOM.render(<ModalBox />, document.getElementById('ModalBox'));
