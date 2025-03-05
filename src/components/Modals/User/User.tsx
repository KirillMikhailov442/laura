'use client';

import { FC } from 'react';
import styles from './User.module.scss';
import {
  Avatar,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import useAppSelector from '@/hooks/useAppSelector';
import useAppDispatch from '@/hooks/useAppDispatch';
import { closeModal } from '@/store/slices/modals';
import { Copy, CopyCheck, X } from 'lucide-react';
import { Typography } from 'antd';

const UserModal: FC = () => {
  const { onClose } = useDisclosure();
  const isOpen = useAppSelector(state => state.modals.user);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(closeModal({ key: 'user' }));
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} isCentered>
      <ModalOverlay />
      <ModalContent className={styles.modal}>
        <div className={styles.gradient}>
          <button className={styles.close} onClick={handleClose}>
            <X size={25} />
          </button>
        </div>
        <nav className={styles.nav}>
          <Avatar className={styles.avatar} name="Mojave" size={'xl'} />
          <Typography.Paragraph
            className={styles.nickname}
            copyable={{
              icon: [
                <Copy key={'copy'} size={18} />,
                <CopyCheck key={'copy-check'} size={18} />,
              ],
              tooltips: ['Copy', 'Copied!'],
            }}
          >
            @Mojave
          </Typography.Paragraph>
        </nav>
        <div className={styles.content}>
          <h5 className={styles.fullName}>Mojave</h5>
          <h5 className={styles.email}>fakemail@gmail.com</h5>
          <p className={styles.description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam,
            est, cumque dolorum earum corporis corrupti ipsa animi unde
            voluptatum magnam quibusdam, aperiam consectetur at odit. Neque aut
            pariatur eius illum!
          </p>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default UserModal;
