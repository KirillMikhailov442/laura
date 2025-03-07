'use client';

import { FC } from 'react';
import styles from './Header.module.scss';
import { Avatar } from '@chakra-ui/react';
import { EllipsisVertical, Phone, Sidebar } from 'lucide-react';
import useAppDispatch from '@/hooks/useAppDispatch';
import { openModal, toggleModal } from '@store/slices/modals';

const Header: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <header className={styles.header}>
      <div
        onClick={() => dispatch(openModal({ key: 'user' }))}
        className={styles.left}
      >
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
        <button
          onClick={() => dispatch(toggleModal({ key: 'roomInfo' }))}
          className={styles.button}
        >
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
