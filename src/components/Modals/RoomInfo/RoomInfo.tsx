'use client';

import { FC } from 'react';
import styles from './RoomInfo.module.scss';
import {
  Avatar,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';
import { closeModal } from '@store/slices/modals';

const RoomInfoModal: FC = () => {
  const dispatch = useAppDispatch();
  const { onClose } = useDisclosure();
  const isOpen = useAppSelector(state => state.modals.roomInfo);

  const handleClose = () => {
    dispatch(closeModal({ key: 'roomInfo' }));
    onClose();
  };
  return (
    <Drawer isOpen={isOpen} onClose={handleClose} placement="right">
      <DrawerOverlay />
      <DrawerContent className={styles.drawer}>
        <Avatar className={styles.avatar} name="Mojave" size={'lg'} />
        <h5 className={styles.fullName}>Mojave</h5>
        <h5 className={styles.email}>fakemail@gmail.com</h5>
        <p className={styles.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum nam
          illum necessitatibus earum ipsum quaerat aliquam veniam, obcaecati
          doloribus quis non amet accusantium enim facere magnam? Porro eaque
          ipsam nulla!
        </p>
      </DrawerContent>
    </Drawer>
  );
};

export default RoomInfoModal;
