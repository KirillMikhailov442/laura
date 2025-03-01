import styles from './Button.module.scss';
import { FC } from 'react';
import clsx from 'clsx';
import { ButtonProps } from '@UI/Button/index';

const ButtonBlack: FC<Omit<ButtonProps, 'variant'>> = ({
  className,
  onClick = () => {},
  type,
  children,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(styles.button, styles.black, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonBlack;
