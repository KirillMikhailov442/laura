import { FC } from 'react';
import MessageDefault from './Default/MessageDefault';

export interface MessageProps {
  variant?: 'default';
  sender?: 'me' | 'companion';
}

const Message: FC<MessageProps> = ({ variant, ...props }) => {
  switch (variant) {
    case 'default':
      return <MessageDefault {...props} />;
    default:
      return <MessageDefault {...props} />;
  }
};

export default Message;
