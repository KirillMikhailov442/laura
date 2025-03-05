'use client';

import { FC, useState } from 'react';
import styles from './Footer.module.scss';
import { Paperclip, Send, Smile } from 'lucide-react';
import clsx from 'clsx';
import { Input } from 'antd';
import EmojiPicker from 'emoji-picker-react';

const Footer: FC = () => {
  const [showEmojy, setShowEmojy] = useState(false);
  return (
    <footer className={styles.footer}>
      <button className={styles.button}>
        <Paperclip size={23} />
      </button>
      <Input.TextArea
        className={styles.textarea}
        autoSize={{ minRows: 1, maxRows: 6 }}
        placeholder="Message..."
      />
      <div>
        <EmojiPicker open={showEmojy} className={styles.emojy} />
        <button
          onClick={() => setShowEmojy(prev => !prev)}
          className={styles.button}
        >
          <Smile size={23} />
        </button>
      </div>
      <button className={clsx(styles.button, styles.send)}>
        <Send size={25} />
      </button>
    </footer>
  );
};

export default Footer;
