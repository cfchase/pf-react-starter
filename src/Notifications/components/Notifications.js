import * as React from "react";
import { connect } from "react-redux";

import {
  TimedToastNotification,
  ToastNotificationList
} from "patternfly-react";

import { deleteNotification } from "../actions";

import "./Notifications.css"

class Notifications extends React.Component {
  dismissNotification = (notification) => {
    this.props.deleteNotification(notification)
  };

  render() {
    const {notifications} = this.props;

    return (
      <ToastNotificationList className="Notifications">
        {notifications.map(notification => (
          <TimedToastNotification
            key={notification.key}
            type={notification.type}
            persistent={notification.persistent}
            timerdelay={notification.timerdelay}
            onDismiss={() => this.dismissNotification(notification)}
          >
              <span>
                <strong>{notification.header}</strong> &nbsp;
                {notification.message}
              </span>
          </TimedToastNotification>
        ))}
      </ToastNotificationList>
    )
  }
}

function mapStateToProps(state) {
  return state.notificationsReducer;
}

function mapDispatchToProps(dispatch) {
  return {
    deleteNotification: (notification) => {
      dispatch(deleteNotification(notification))
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
