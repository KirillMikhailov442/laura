import styles from './Steps.module.scss';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { Avatar } from '@chakra-ui/react';
import { Button, Input, Textarea } from '@/components';
import { AtSign, Pencil, UserRoundPlus } from 'lucide-react';

const StepResult: FC = () => {
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
        label={'Name'}
        placeholder={'Enter name'}
        defaultValue={'Mojave'}
      />
      <Input type={'text'} label={'Surnname'} placeholder={'Enter surname'} />
      <Input
        type={'text'}
        label={'Nickname'}
        placeholder={'Enter @nickname'}
        icon={<AtSign size={18} />}
        defaultValue={'@Mojave'}
      />
      <Input
        type={'email'}
        label={'Email'}
        placeholder={'Enter email'}
        defaultValue={'fakemail@gmail.com'}
      />
      <Textarea
        label={'Description'}
        placeholder={'Enter description'}
        rows={4}
      />
      <footer className={styles.footer}>
        <Button variant={'outline'}>
          <Pencil size={18} style={{ marginRight: '0.4rem' }} /> Edit
        </Button>
        <Button>
          <UserRoundPlus size={18} style={{ marginRight: '0.4rem' }} /> Create
          account
        </Button>
      </footer>
    </motion.form>
  );
};

export default StepResult;
