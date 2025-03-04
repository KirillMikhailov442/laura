'use client';

import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const HomePage: NextPage = () => {
  const { push } = useRouter();
  useEffect(() => {
    push('/rooms');
  }, []);
  return <h1></h1>;
};

export default HomePage;
