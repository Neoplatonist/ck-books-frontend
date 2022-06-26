import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';

const setMode = (variant) => {
  switch (variant) {
    case 'alt':
      return styles.alt;
    case 'linearBlack':
      return styles.linearBlack;
    case 'linearWhite':
      return styles.linearWhite;
    case 'large':
      return styles.large;
    case 'jumbo':
      return styles.jumbo;
    default:
      // medium
      return styles.medium;
  }
};

/**
 * Primary UI component for user interaction
 */
const Button = ({ variant, label, disabled, style, ...props }) => {
  const mode = setMode(variant);

  return (
    <button
      type='button'
      className={[styles.button, mode, style].join(' ')}
      disabled={disabled}
      {...props}
    >
      {label || props.children}
    </button>
  );
};

Button.propTypes = {
  /**
   * Choose a variant: medium, alt, linearBlack, linearWhite large, jumbo
   */
  variant: PropTypes.oneOf([
    'medium',
    'alt',
    'linearBlack',
    'linearWhite',
    'large',
    'jumbo'
  ]).isRequired,
  /**
   * Is the button disabled?
   */
  disabled: PropTypes.bool,
  /**
   * An alternative to children for declaring the button's content
   */
  label: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'medium',
  disabled: false,
  onClick: undefined,
};

export default Button;
