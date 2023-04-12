import { useContext } from "react";
import { NotifyContext } from "./NotificationProvider";

function useNotify() {
  return useContext(NotifyContext);
}

export default useNotify;
