import { FC } from 'react';
import ProfileModal from './Profile/Profile';
import MenuModal from './Menu/Menu';
import UserModal from './User/User';
import RoomInfoModal from './RoomInfo/RoomInfo';

const Modals: FC = () => (
  <>
    {' '}
    <ProfileModal />
    <MenuModal />
    <UserModal />
    <RoomInfoModal />
  </>
);

export default Modals;
