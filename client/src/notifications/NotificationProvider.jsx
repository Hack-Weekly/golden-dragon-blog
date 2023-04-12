import { createContext, useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import shortId from "shortid";
import { AnimatePresence } from "framer-motion";

import Notification from "./Notification";

export const NotifyContext = createContext({});

const NotificationsContainer = styled.div`
  position: fixed;
  top: 16px;
  right: 16px;
  pointer-events: none;
  z-index: 3000;
`;

function useCreateDomElement() {
  const [domElement, setDomElement] = useState(null);

  useEffect(() => {
    const element = document.createElement("div");
    document.body.appendChild(element);
    setDomElement(element);

    return () => document.body.removeChild(element);
  }, []);

  return domElement;
}

function useNotifications() {
  const [notifications, setNotifications] = useState([]);

  const notify = useCallback(notificationPayload => {
    const id = shortId();

    function removeNotification() {
      setNotifications(notifications => notifications.filter(n => n.id !== id));
    }

    setNotifications(notifications => [
      ...notifications,
      { id, onClose: removeNotification, ...notificationPayload }
    ]);

    setTimeout(removeNotification, notificationPayload.timeout ?? 5000);
  }, []);

  return { notify, notifications };
}

function NotificationProvider({ children }) {
  const notificationRoot = useCreateDomElement();

  const { notify, notifications } = useNotifications();

  return (
    <>
      <NotifyContext.Provider value={notify}>{children}</NotifyContext.Provider>
      {notificationRoot &&
        createPortal(
          <NotificationsContainer>
            <AnimatePresence>
              {notifications.map(notification => (
                <Notification key={notification.id} {...notification} />
              ))}
            </AnimatePresence>
          </NotificationsContainer>,
          notificationRoot
        )}
    </>
  );
}

export default NotificationProvider;
