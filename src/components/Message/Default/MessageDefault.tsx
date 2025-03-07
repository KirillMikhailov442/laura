'use client';

import { FC } from 'react';
import styles from './MessageDefault.module.scss';
import { MessageProps } from '..';
import { Avatar } from '@chakra-ui/react';
import clsx from 'clsx';
import useAppDispatch from '@/hooks/useAppDispatch';
import { Dropdown, MenuProps } from 'antd';
import { openModal } from '@store/slices/modals';
import { Pencil, Trash } from 'lucide-react';

const MessageDefault: FC<Omit<MessageProps, 'variant'>> = ({
  sender,
  ...props
}) => {
  const dispatch = useAppDispatch();
  const items: MenuProps['items'] = [
    {
      label: (
        <p className={styles.dropdownItem}>
          <Pencil size={16} />
          Edit
        </p>
      ),
      key: '1',
    },
    {
      label: (
        <p className={styles.dropdownItem}>
          <Trash size={16} />
          Delete
        </p>
      ),
      key: '2',
      danger: true,
    },
  ];
  return (
    <div className={styles.wrapper} {...props}>
      <Avatar
        onClick={() => dispatch(openModal({ key: 'user' }))}
        name="Mojave"
        size={'sm'}
        className={styles.avatar}
      />
      <Dropdown menu={{ items }} trigger={['contextMenu']}>
        <div
          className={clsx(styles.message, {
            [`${styles.me}`]: sender == 'me',
          })}
        >
          <h6 className={styles.fullName}>Mojave person</h6>
          <p className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            eaque ad veritatis iusto officia repudiandae rem aliquid error.
            Commodi possimus blanditiis iste molestiae et, iusto magnam quam
            necessitatibus minima sed!
          </p>
          <p className={styles.createAt}>12 Dec</p>
        </div>
      </Dropdown>
    </div>
  );
};

export default MessageDefault;
