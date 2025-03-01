import React, { FC, HTMLAttributes, ReactNode, Ref } from 'react';
import InputText from './Text/InputText';
import InputEmail from './Email/InputEmail';
import InputPassword from './Password/InputPassword';

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'password' | 'email' | 'search' | 'date' | 'time';
  label?: string;
  error?: string;
  ref?: Ref<HTMLInputElement>;
  icon?: ReactNode;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
}

const Input: FC<InputProps> = ({ type, ...props }) => {
  switch (type) {
    case 'email':
      return <InputEmail {...props} />;
    case 'password':
      return <InputPassword {...props} />;
    default:
      return <InputText {...props} />;
  }
};

export default Input;
