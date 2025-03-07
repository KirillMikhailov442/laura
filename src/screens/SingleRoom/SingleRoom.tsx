import { NextPage } from 'next';
import styles from './SingleRoom.module.scss';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

const SingleRoomScreen: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default SingleRoomScreen;
