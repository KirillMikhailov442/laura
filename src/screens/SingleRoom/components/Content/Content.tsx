import { FC } from 'react';
import styles from './Content.module.scss';
import Message from '@components/Message';

const Content: FC = () => {
  return (
    <div className={styles.content}>
      <Message sender="me" />
      <Message sender="companion" />
      <Message sender="companion" />
      <Message sender="companion" />
    </div>
  );
};

export default Content;
