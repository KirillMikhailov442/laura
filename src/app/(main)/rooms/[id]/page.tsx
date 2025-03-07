import SingleRoomScreen from '@screens/SingleRoom/SingleRoom';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const SingleRoomPage: NextPage = props => <SingleRoomScreen {...props} />;
export default SingleRoomPage;
