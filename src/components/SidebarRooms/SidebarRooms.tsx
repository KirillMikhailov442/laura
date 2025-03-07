import { FC } from 'react';
import styles from './SidebarRooms.module.scss';
import { Splitter } from 'antd';
import { Search } from 'lucide-react';
import Input from '@components/UI/Input';
import Room from '@components/Room/Room';
import clsx from 'clsx';

const SidebarRooms: FC = () => {
  return (
    <Splitter.Panel
      defaultSize={350}
      min={300}
      max={'45%'}
      className={clsx(styles.aside, 'sidebar')}
    >
      <header className={styles.header}>
        <Input
          className={styles.input}
          icon={<Search size={16} />}
          type="text"
          placeholder="Search..."
        />
      </header>
      <div className={styles.rooms}>
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
      </div>
    </Splitter.Panel>
  );
};

export default SidebarRooms;
