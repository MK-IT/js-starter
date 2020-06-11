import React, { FC } from 'react';
import clsx from 'clsx';

import styles from './Button.module.css';

type Props = {
  className?: string;
  inverse?: boolean;
};

const Button: FC<Props> = ({
  children,
  className = '',
  inverse = false,
  ...rest
}) => (
  <button
    type="button"
    className={clsx(styles.root, inverse && styles.inverse, className)}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
