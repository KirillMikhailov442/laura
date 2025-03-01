import styles from './Steps.module.scss';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { Button, Input, Textarea } from '@/components';
import { AtSign } from 'lucide-react';
import { Avatar } from '@chakra-ui/react';
import useAppDispatch from '@/hooks/useAppDispatch';
import { nextStep } from '@store/slices/registration';

const StepDescription: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <motion.form
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      className={styles.form}
    >
      <Avatar className={styles.avatar} size={'xl'} name={'Mojave'} />
      <Input
        type={'text'}
        label={'Nickname'}
        placeholder={'Enter @nickname'}
        icon={<AtSign size={18} />}
      />
      <Textarea
        label={'Description (not necessarily)'}
        placeholder={'Enter description'}
        rows={4}
      />
      <Button onClick={() => dispatch(nextStep())} type={'button'}>
        Further
      </Button>
    </motion.form>
  );
};

export default StepDescription;
