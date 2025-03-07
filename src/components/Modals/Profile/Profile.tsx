'use client';

import { FC } from 'react';
import styles from './Profile.module.scss';
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
import { Copy, CopyCheck, DoorOpen, Pencil, X } from 'lucide-react';
import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import { useRouter } from 'next/navigation';
import { Textarea } from '@components/index';
import { Typography } from 'antd';

const ProfileModal: FC = () => {
  const { onClose } = useDisclosure();
  const isOpen = useAppSelector(state => state.modals.profile);
  const dispatch = useAppDispatch();
  const { push } = useRouter();

  const handleClose = () => {
    dispatch(closeModal({ key: 'profile' }));
    onClose();
  };

  const handleExit = () => {
    push('/signin');
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
          <Input label="Name" />
          <Input label="Surname" />
          <Input label="Email" type="email" />
          <Textarea rows={5} label="description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
            impedit eius quae facere aut minus corporis veritatis provident
            nesciunt pariatur quod ratione, quos esse rerum perspiciatis animi,
            voluptatem optio unde.
          </Textarea>
          <footer className={styles.footer}>
            <Button
              onClick={handleExit}
              className={styles.exit}
              variant="outline"
            >
              <DoorOpen size={18} style={{ marginRight: '5px' }} /> Exit
            </Button>
            <Button>
              <Pencil size={18} style={{ marginRight: '5px' }} />
              Edit
            </Button>
          </footer>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default ProfileModal;
