import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Button, ButtonToolbar, Card, CardBody, Col } from "reactstrap";
import { BasicNotification } from "@/shared/components/Notification";
import { useSelector, useDispatch } from "react-redux";
import { user_error_action } from "../../../../redux/actions/authActions";

const show = (showNotification, color, msg) =>
  showNotification({
    notification(theme) {
      return (
        <BasicNotification
          color={color}
          title={color == "danger" ? "Error" : "Success"}
          message={msg}
          theme={theme}
        />
      );
    },
    position: "right-up",
  });

const ColorStates = ({ showNotification }) => {
  const { t } = useTranslation("common");
  const user_error_notification = useSelector(
    (state) => state.user.user_error_notification
  );
  console.log("___user_error_notification", user_error_notification);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user_error_notification.show) {
      show(
        showNotification,
        user_error_notification.type,
        user_error_notification.msg
      );
    }
    dispatch(
      user_error_action({
        show: false,
        msg: user_error_notification.msg,
        type: user_error_notification.type,
      })
    );
  }, [user_error_notification.show]);
  // console.log("user_error_notification", user_error_notification);
  return null;

  // return (
  //   <Col md={12} lg={6} xs={12}>
  //     <Card>
  //       <CardBody>
  //         <div className="card__title">
  //           <h5 className="bold-text">{t('ui_elements.notifications.color_notifications')}</h5>
  //           <h5 className="subhead">Use BasicNotification with class <span className="red-text">primary</span>,
  //             <span className="red-text"> success</span>,
  //             <span className="red-text"> warning</span>,
  //             <span className="red-text"> danger</span>
  //           </h5>
  //         </div>
  //         {/* <ButtonToolbar>
  //           <Button color="primary" onClick={() => show(showNotification, 'primary')}>Primary</Button>
  //           <Button color="success" onClick={() => show(showNotification, 'success')}>Success</Button>
  //           <Button color="warning" onClick={() => show(showNotification, 'warning')}>Warning</Button>
  //           <Button color="danger" onClick={() => show(showNotification, 'danger')}>Danger</Button>
  //         </ButtonToolbar> */}
  //       </CardBody>
  //     </Card>
  //   </Col>
  // );
};

ColorStates.propTypes = {
  showNotification: PropTypes.func.isRequired,
};

export default ColorStates;
