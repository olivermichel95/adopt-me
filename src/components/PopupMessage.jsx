import { useDispatch } from "react-redux";
import { popupReduxActions } from "../redux/slices/popup-slice";

const PopupMessage = ({ type, message }) => {
  const dispatch = useDispatch();

  const hidePopupHandler = () => {
    dispatch(popupReduxActions.hidePopup());
  };

  return (
    <div onClick={hidePopupHandler} className={`popup ${type}`}>
      {message}
    </div>
  );
};

export default PopupMessage;
