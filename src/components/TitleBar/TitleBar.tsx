import { FC } from 'react';
import { X, Minus, Square } from 'lucide-react';
import clsx from 'clsx';

import styles from './TitleBar.module.scss';

const TitleBar: FC = () => {
  return (
    <div className={styles.titleBar}>
      <b className={styles.logo}>Project Laura</b>
      <nav className={styles.nav}>
        <button tabIndex={-1} className={styles.button}>
          <Minus size={18} />
        </button>
        <button tabIndex={-1} className={styles.button}>
          <Square size={16} />
        </button>
        <button tabIndex={-1} className={clsx(styles.button, styles.close)}>
          <X size={20} />
        </button>
      </nav>
    </div>
  );
};

export default TitleBar;
