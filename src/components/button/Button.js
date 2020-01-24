import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ children, onClick }) => {
  return (
    <div className="button" role="button" onClick={onClick}>
      {children}
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: undefined,
};

export default Button;
