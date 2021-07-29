import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { compose } from "redux";
import { Col, Container, Row } from "reactstrap";
import { RTLProps, ThemeProps } from "@/shared/prop-types/ReducerProps";
import Notification from "rc-notification";
import ColorStates from "../../../containers/UI/Notification/components/ColorStates";

const objectNotification = {
  LU: null,
  RU: null,
  TC: null,
};

Notification.newInstance({ style: { top: 65 } }, (n) => {
  objectNotification.LU = n;
});
Notification.newInstance({ style: { top: 65 } }, (n) => {
  objectNotification.RU = n;
});
Notification.newInstance({ style: { top: 65 } }, (n) => {
  objectNotification.TC = n;
});

const Notifications = ({ rtl, theme }) => {
  const { t } = useTranslation("common");

  const showNotification = ({ notification, position }, direction) => {
    let type;
    let style;
    const notificationDefaultProps = {
      content: notification(theme),
      key: new Date().getTime(),
      duration: 5,
      closable: true,
      className: `${position} ${direction}-support`,
    };

    switch (position) {
      case "left-up":
        style = { top: 0, left: 0 };
        type = "LU";
        break;
      case "right-up":
        style = { top: 0, left: "calc(100vw - 100%)" };
        type = "RU";
        break;
      default:
        style = { top: 0, left: 0 };
        type = "TC";
        break;
    }

    objectNotification[type].notice({
      ...notificationDefaultProps,
      style,
    });
  };

  useEffect(() => {
    const currentTheme =
      theme.className === "theme-dark" ? "theme-light" : "theme-dark";
    [].forEach.call(
      document.querySelectorAll(`.notification--${currentTheme}`),
      (el) => {
        // eslint-disable-next-line no-param-reassign
        el.className = el.className.replace(
          `notification--${currentTheme}`,
          `notification--${theme.className}`
        );
      }
    );
  }, [theme]);

  return (
    <Container>
      <Row>
        <ColorStates
          theme={theme}
            showNotification={({ notification, position }) =>
            showNotification({ notification, position }, rtl.direction)
          }
        />
      </Row>
    </Container>
  );
};

Notifications.propTypes = {
  rtl: RTLProps.isRequired,
  theme: ThemeProps.isRequired,
};

export default compose(
  connect((state) => ({
    rtl: state.rtl,
    theme: state.theme,
  }))
)(Notifications);
