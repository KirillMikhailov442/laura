import styles from './Button.module.scss';
import { FC } from 'react';
import clsx from 'clsx';
import { ButtonProps } from '@UI/Button/index';

const ButtonOutline: FC<Omit<ButtonProps, 'variant'>> = ({
  className,
  onClick = () => {},
  type,
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(styles.button, styles.outline, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonOutline;
