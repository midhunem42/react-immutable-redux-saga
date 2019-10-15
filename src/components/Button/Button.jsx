import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const variants = ["text", "outlined", "contained"];
const colors = ["primary", "secondary"]

const Button = props => {
    const { name, color, onClickHandler, variant, disableRipple, disabled } = props
    const text = variant === 'text' ? "-contained" : "";
    const outlined = variant === 'outlined' ? "-outlined" : "";
    const contained = variant === 'contained' ? "-contained" : "";
    const primary = color === 'primary' ? "-primary" : "";
    const secondary = color === 'secondary' ? "-secondary" : "";
    const rippleClass = clsx({ 'button-ripple': !disableRipple })
    const className = "btn" + outlined + text + contained + primary + secondary;

    return (
        <button
            name={name}
            id={`${name}_id`}
            onClick={onClickHandler}
            className={className}
            disabled={disabled}
        >
            {props.name}
            <span className={rippleClass} ></span>
        </button>
    )
}
Button.defaultProps = {
    color: "default",
    onClickHandler: function () { },
    name: 'themed-button',
    variant: 'contained',
    disableFocusRipple: false,
    disableRipple: true,
    fullWidth: false,
    size: "small",
    classes: "",
    disabled: false
    // variant="outlined"
}
Button.propTypes = {
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf(colors),
    /**
     * If `true`, the button will be disabled.
     */
    disabled: PropTypes.bool,
    /**
     * The variant to use.
     */
    variant: PropTypes.oneOf(variants),
    /**
     * onClick callback function.
     */
    onClickHandler: PropTypes.func,
    /**
     * Name of the button.
     */
    name: PropTypes.string.isRequired

}
export default Button;