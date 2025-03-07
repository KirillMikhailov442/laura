'use client';

import { NextPage } from 'next';
import { useRouter } from 'next/navigation';

const HomePage: NextPage = () => {
  const { push } = useRouter();
  return <h1 onClick={() => push('/rooms')}>Rooms</h1>;
};

export default HomePage;
