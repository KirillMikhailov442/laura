'use client';

import { FC } from 'react';
import styles from './Menu.module.scss';
import {
  Avatar,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import useAppDispatch from '@/hooks/useAppDispatch';
import { closeModal, openModal } from '@store/slices/modals';
import useAppSelector from '@/hooks/useAppSelector';
import { Settings, UserCircle2Icon } from 'lucide-react';

const MenuModal: FC = () => {
  const dispatch = useAppDispatch();
  const { onClose } = useDisclosure();
  const isOpen = useAppSelector(state => state.modals.menu);

  const handleClose = () => {
    dispatch(closeModal({ key: 'menu' }));
    onClose();
  };
  return (
    <Drawer onClose={handleClose} isOpen={isOpen} placement="left">
      <DrawerOverlay />
      <DrawerContent className={styles.drawer}>
        <header className={styles.header}>
          <Avatar name="Mojave" />
          <div>
            <h5 className={styles.fullName}>Mojave Kik</h5>
            <p className={styles.nickname}>@Mojave</p>
          </div>
        </header>
        <ul className={styles.list}>
          <li>
            <button
              onClick={() => dispatch(openModal({ key: 'profile' }))}
              className={styles.listItem}
            >
              <UserCircle2Icon size={25} /> Profile
            </button>
          </li>
          <li>
            <button className={styles.listItem}>
              <Settings size={25} /> Setting
            </button>
          </li>
        </ul>
        <footer className={styles.footer}>Project Laura - version dev</footer>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuModal;
