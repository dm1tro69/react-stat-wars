import React from 'react'
import cn from 'classnames'
import styles from './UiButton.module.css'
import PropTypes from "prop-types";

const UiButton = ({text, onClick, disabled, theme='dark', classes}) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={cn(styles.buttons, styles[theme], classes)}

        >
            {text}
        </button>
    )
}
export default UiButton
UiButton.propTypes = {
    text: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    theme: PropTypes.string,
    classes: PropTypes.string
}