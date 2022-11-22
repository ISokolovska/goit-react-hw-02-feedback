import PropTypes from "prop-types";
import { Title } from "../FeedbackOptions/Styled";

export const Section = ({ title, children }) => { 
    return (
        <section>
            <Title className={title}>{title}</Title>
            {children}  
        </section>     
    );
}

Section.propTypes = {
    title: PropTypes.string,
}

