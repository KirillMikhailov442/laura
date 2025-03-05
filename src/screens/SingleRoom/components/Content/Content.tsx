import { FC } from 'react';
import styles from './Content.module.scss';

const Content: FC = () => {
  return (
    <div className={styles.content}>
      <h1>Messages</h1>
    </div>
  );
};

export default Content;
