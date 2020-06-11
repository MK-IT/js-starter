import React from 'react';
import clsx from 'clsx';

import './styles.css';
import styles from './Button.module.css';

const Button = ({ children, className, inverse, ...rest }) => {
  return (
    <button
      type="button"
      className={clsx(
        'my-button', // standard CSS
        styles.root, // CSS module
        inverse && styles.inverse, // apply class depending on props
        className // extend with passed className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
