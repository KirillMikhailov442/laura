import { FC, HTMLAttributes, Ref } from 'react';
import styles from './Textarea.module.scss';
import clsx from 'clsx';

export interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  variant?: 'outline' | 'default';
  placeholder?: string;
  rows?: number;
  readOnly?: boolean;
  value?: string;
  name?: string;
  ref?: Ref<HTMLTextAreaElement>;
}

const Textarea: FC<TextareaProps> = ({
  className,
  label,
  children,
  ...props
}) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <label className={styles.label}>{label}</label>
      <textarea className={styles.textarea} {...props}>
        {children}
      </textarea>
    </div>
  );
};

export default Textarea;
