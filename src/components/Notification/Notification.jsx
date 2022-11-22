import PropTypes from "prop-types";
import { Message } from "components/FeedbackOptions/Styled";

export const Notification = ({ message }) => {
    return (<Message>{message}</Message>);
}
 
Notification.propTypes = {
    message: PropTypes.string,
}
