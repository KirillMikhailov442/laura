import styles from './Steps.module.scss';
import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import useAppDispatch from '@/hooks/useAppDispatch';
import pin_code_img from '@images/pin-code.png';
import Image from 'next/image';
import clsx from 'clsx';
import { PinInput, PinInputField } from '@chakra-ui/react';
import { nextStep } from '@store/slices/registration';

const StepConfirm: FC = () => {
  const dispatch = useAppDispatch();
  const [isNext, setNext] = useState(true);

  const handleNext = () => {
    if (isNext) {
      setNext(false);
      dispatch(nextStep());
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      className={clsx(styles.form, styles.confirm)}
    >
      <Image
        className={styles.pinCodeImage}
        src={pin_code_img}
        width={150}
        height={150}
        alt={'pin code'}
      />
      <p>
        A letter with a confirmation code has been sent to the mail{' '}
        <b>fakemail@gmail.com</b>. Please go to your mail and paste the code
        here
      </p>
      <div>
        <PinInput
          onComplete={handleNext}
          placeholder={'?'}
          type={'alphanumeric'}
          size={'lg'}
          autoFocus
        >
          <PinInputField className={styles.pinInputField} />
          <PinInputField className={styles.pinInputField} />
          <PinInputField className={styles.pinInputField} />
          <PinInputField className={styles.pinInputField} />
          <PinInputField className={styles.pinInputField} />
        </PinInput>
      </div>
    </motion.div>
  );
};

export default StepConfirm;
