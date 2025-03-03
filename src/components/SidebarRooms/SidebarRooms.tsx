import { FC } from 'react';
import styles from './SidebarRooms.module.scss';
import { Splitter } from 'antd';
import { Menu, Search } from 'lucide-react';
import Input from '@components/UI/Input';
import Room from '@components/Room/Room';

const SidebarRooms: FC = () => {
  return (
    <Splitter.Panel
      defaultSize={400}
      min={300}
      max={'45%'}
      className={styles.aside}
    >
      <header className={styles.header}>
        <button className={styles.hamburger}>
          <Menu size={25} />
        </button>
        <Input
          className={styles.input}
          icon={<Search size={16} />}
          type="text"
          placeholder="Search..."
        />
      </header>
      <div className={styles.rooms}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Room />
          </li>
          <li className={styles.listItem}>
            <Room />
          </li>
          <li className={styles.listItem}>
            <Room />
          </li>
          <li className={styles.listItem}>
            <Room />
          </li>
          <li className={styles.listItem}>
            <Room />
          </li>
          <li className={styles.listItem}>
            <Room />
          </li>
        </ul>
      </div>
    </Splitter.Panel>
  );
};

export default SidebarRooms;
