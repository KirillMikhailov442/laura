import { FC } from 'react';
import styles from './Header.module.scss';
import { Avatar } from '@chakra-ui/react';
import { EllipsisVertical, Phone, Sidebar } from 'lucide-react';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Avatar name="Private room" />
        <div className={styles.info}>
          <h5 className={styles.name}>Private room</h5>
          <p className={styles.typing}>typing...</p>
        </div>
      </div>
      <nav className={styles.nav}>
        <button className={styles.button}>
          <Phone size={25} />
        </button>
        <button className={styles.button}>
          <Sidebar size={25} />
        </button>
        <button className={styles.button}>
          <EllipsisVertical size={25} />
        </button>
      </nav>
    </header>
  );
};

export default Header;
