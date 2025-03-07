import { MessageCircleMore } from 'lucide-react';
import styles from './EmptyRoom.module.scss';
import { NextPage } from 'next';

const EmptyRoomScreen: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <MessageCircleMore size={100} />
      <h4 className={styles.text}>Select chat for communication</h4>
    </div>
  );
};

export default EmptyRoomScreen;
