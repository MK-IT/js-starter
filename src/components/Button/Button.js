import React from 'react';
import clsx from 'clsx';

import styles from './Button.styles.css';

const Button = ({ inverse, ...rest }) => {
  return (
    <button
      type="button"
      className={clsx(styles.root, inverse && styles.inverse)}
      {...rest}
    >
      Button
    </button>
  );
};

export default Button;
