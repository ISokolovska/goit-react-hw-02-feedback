import PropTypes from "prop-types";
import { FeedbackWrapper, Button } from "./Styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (<FeedbackWrapper className={options}>
        {
            options.map(option => {
                return (
                    <Button type="button" onClick={() => onLeaveFeedback(option)} key={option}>{option}</Button>
                );
            })}         
    </FeedbackWrapper>);
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(
    PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
