'use client';

import { FC } from 'react';
import styles from './MenuButton.module.scss';
import { Menu, X } from 'lucide-react';
import useAppDispatch from '@/hooks/useAppDispatch';
import { toggleModal } from '@store/slices/modals';
import useAppSelector from '@/hooks/useAppSelector';

const MenuButton: FC = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(state => state.modals.menu);
  return (
    <button
      onClick={() => dispatch(toggleModal({ key: 'menu' }))}
      className={styles.button}
    >
      {isOpen ? <X size={25} /> : <Menu size={25} />}
    </button>
  );
};

export default MenuButton;
