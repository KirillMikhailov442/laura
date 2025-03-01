import { FC, useId } from 'react';
import styles from './InputText.module.scss';
import { InputProps } from '..';
import clsx from 'clsx';
const InputText: FC<InputProps> = ({
  label,
  error,
  ref,
  icon,
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
          type="text"
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
            [`${styles.inputWithIcon}`]: icon,
            [`${styles.inputError}`]: error,
          })}
          {...props}
        />
        <span className={styles.icon}>{icon}</span>
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default InputText;
