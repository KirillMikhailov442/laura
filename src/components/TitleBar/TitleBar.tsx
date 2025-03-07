import { FC } from 'react';
import { X, Minus, Square } from 'lucide-react';
import clsx from 'clsx';

import styles from './TitleBar.module.scss';
import MenuButton from './components/MenuButton';

const TitleBar: FC = () => {
  return (
    <div className={styles.titleBar}>
      <MenuButton />
      <nav className={styles.nav}>
        <button tabIndex={-1} className={styles.button}>
          <Minus size={22} />
        </button>
        <button tabIndex={-1} className={styles.button}>
          <Square size={18} />
        </button>
        <button tabIndex={-1} className={clsx(styles.button, styles.close)}>
          <X size={22} />
        </button>
      </nav>
    </div>
  );
};

export default TitleBar;
