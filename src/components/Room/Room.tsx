'use client';

import { FC } from 'react';
import styles from './Room.module.scss';
import { Avatar } from '@chakra-ui/react';
import { Dropdown, MenuProps, Typography } from 'antd';
import Link from 'next/link';
import { Archive, DoorOpen, MessageCircle, Pin } from 'lucide-react';

const Room: FC = () => {
  const items: MenuProps['items'] = [
    {
      label: (
        <p className={styles.dropdownItem}>
          <MessageCircle size={16} />
          Open chat
        </p>
      ),
      key: '1',
    },
    {
      label: (
        <p className={styles.dropdownItem}>
          <Pin size={16} />
          Pin
        </p>
      ),
      key: '2',
    },
    {
      label: (
        <p className={styles.dropdownItem}>
          <Archive size={16} />
          Add to groups
        </p>
      ),
      key: '3',
      type: 'submenu',
      children: [
        {
          label: <p className={styles.dropdownItem}>Group 1</p>,
          key: 'group-1',
        },
        {
          label: <p className={styles.dropdownItem}>Group 2</p>,
          key: 'group-2',
        },
        {
          label: <p className={styles.dropdownItem}>Gropu 3</p>,
          key: 'group-3',
        },
      ],
    },
    {
      label: (
        <p className={styles.dropdownItem}>
          <DoorOpen size={16} />
          Leave room
        </p>
      ),
      key: '4',
      danger: true,
    },
  ];
  return (
    <Dropdown menu={{ items }} trigger={['contextMenu']}>
      <Link href={'/rooms/1'} className={styles.room}>
        <Avatar name="Private room" />
        <div className={styles.content}>
          <Typography.Paragraph
            className={styles.name}
            ellipsis={{ rows: 1, expandable: true, symbol: null }}
          >
            Private room
          </Typography.Paragraph>
          <Typography.Paragraph
            ellipsis={{ rows: 1, expandable: true, symbol: null }}
            className={styles.text}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur repellat quod est consectetur aliquam explicabo
            cupiditate eius blanditiis! Alias, corporis a debitis possimus
            ratione placeat quo voluptate enim optio deserunt.
          </Typography.Paragraph>
        </div>
        <div>
          <p className={styles.date}>12:00PM</p>
        </div>
      </Link>
    </Dropdown>
  );
};

export default Room;
