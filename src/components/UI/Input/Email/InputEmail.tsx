import { FC, useId } from 'react';
import styles from './InputEmail.module.scss';
import { InputProps } from '..';
import clsx from 'clsx';
import { Mail } from 'lucide-react';

const InputEmail: FC<InputProps> = ({
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
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <div className={styles.content}>
        <input
          type="email"
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
          <Mail size={18} />
        </span>
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default InputEmail;
