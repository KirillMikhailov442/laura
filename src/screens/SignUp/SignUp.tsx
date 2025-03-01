'use client';

import { NextPage } from 'next';
import styles from './SignUp.module.scss';
import clsx from 'clsx';
import { Steps } from 'antd';
import useAppSelector from '@/hooks/useAppSelector';
import { AnimatePresence } from 'framer-motion';
import StepBase from './components/Steps/StepBase';
import StepConfirm from '@screens/SignUp/components/Steps/StepConfirm';
import StepDescription from '@screens/SignUp/components/Steps/StepDescription';
import StepResult from '@screens/SignUp/components/Steps/StepResult';

const steps = [
  {
    title: 'Start',
  },
  {
    title: 'Confirmation',
  },
  {
    title: 'Description',
  },
  {
    title: 'Result',
  },
];

const SignUpScreen: NextPage = () => {
  const regNum = useAppSelector(state => state.registration.stepNumber);

  return (
    <div className={clsx('pageFull', styles.page)}>
      <Steps
        current={regNum - 1}
        progressDot
        className={styles.steps}
        items={steps}
      />
      <div className={clsx('container', styles.container)}>
        <h1 className={styles.title}>Registration {regNum}/4</h1>
        <AnimatePresence mode={'wait'}>
          {regNum === 1 && <StepBase key={'reg-1'} />}
          {regNum === 2 && <StepConfirm key={'reg-2'} />}
          {regNum === 3 && <StepDescription key={'reg-3'} />}
          {regNum === 4 && <StepResult key={'reg-4'} />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SignUpScreen;
