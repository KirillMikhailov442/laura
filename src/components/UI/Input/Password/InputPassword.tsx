'use client';

import { FC, useId, useState } from 'react';
import styles from './InputPassword.module.scss';
import { InputProps } from '..';
import clsx from 'clsx';
import { Eye, EyeOff, Lock } from 'lucide-react';
const InputPassword: FC<InputProps> = ({
  label,
  error,
  ref,
  onChange,
  onBlur,
  placeholder,
  name,
  ...props
}) => {
  const id = useId();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <div className={styles.content}>
        <input
          type={showPassword ? 'text' : 'password'}
          id={id}
          ref={ref}
          placeholder={placeholder}
          autoCorrect="off"
          autoComplete="off"
          spellCheck="false"
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          className={clsx(styles.input, {
            [`${styles.inputError}`]: error,
          })}
          {...props}
        />
        <span className={styles.icon}>
          <Lock size={18} />
        </span>
        <span
          onClick={() => setShowPassword(prev => !prev)}
          className={styles.eye}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </span>
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default InputPassword;
