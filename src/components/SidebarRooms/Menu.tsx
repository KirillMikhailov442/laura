'use client';

import { Menu } from 'lucide-react';
import { FC } from 'react';
import styles from './SidebarRooms.module.scss';
import useAppDispatch from '@/hooks/useAppDispatch';
import { toggleModal } from '@store/slices/modals';

const MenuButton: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => dispatch(toggleModal({ key: 'menu' }))}
      className={styles.hamburger}
    >
      <Menu size={25} />
    </button>
  );
};

export default MenuButton;
