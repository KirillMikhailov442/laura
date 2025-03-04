import { NextPage } from 'next';
import styles from './SingleRoom.module.scss';
import Header from './components/Header/Header';

const SingleRoomScreen: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
    </div>
  );
};

export default SingleRoomScreen;
