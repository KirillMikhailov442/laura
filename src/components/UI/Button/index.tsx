'use client';

import { FC, HTMLAttributes } from 'react';
import ButtonOutline from './ButtonOutline';
import ButtonBlack from './ButtonBlack';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'black';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ variant, ...props }) => {
  switch (variant) {
    case 'black':
      return <ButtonBlack {...props} />;
    case 'outline':
      return <ButtonOutline {...props} />;
    default:
      return <ButtonBlack {...props} />;
  }
};

export default Button;
