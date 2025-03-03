import { FC } from 'react';
import styles from './Room.module.scss';
import { Avatar } from '@chakra-ui/react';

const Room: FC = () => {
  return (
    <div className={styles.room}>
      <Avatar name="mojave" />
      <div className={styles.content}>
        <h5 className={styles.name}>Mojave Room</h5>
        <div className={styles.textContainer}>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quam
            fugiat neque dolorum amet eum ducimus laboriosam, asperiores
            voluptatum temporibus! Perferendis excepturi ducimus sequi?
            Distinctio modi odio est ex veniam!
          </p>
        </div>
      </div>
      <div>
        <p className={styles.date}>12:00PM</p>
      </div>
    </div>
  );
};

export default Room;
