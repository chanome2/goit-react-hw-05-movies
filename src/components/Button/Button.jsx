import css from "./Button.module.css";
import PropTypes from "prop-types";

export const Button = ({ text, position, children }) => {
    return (
        <button className={css.button} type="button">
            {position === "left" && children}
            {text}
            {position === "right" && children}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};