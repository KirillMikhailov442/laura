import { FC } from 'react';
import styles from './Steps.module.scss';
import { Button, Input } from '@components/index';
import { motion } from 'framer-motion';
import useAppDispatch from '@/hooks/useAppDispatch';
import { nextStep } from '@store/slices/registration';

const StepBase: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <motion.form initial className={styles.form}>
      <Input type="text" label="Имя" placeholder="Введите имя" />
      <Input
        type="text"
        label="Фамилия (необязательно)"
        placeholder="Введите фамилию"
      />
      <Input type="email" label="Email" placeholder="Введите e-mail" />
      <Input type="password" label="Пароль" placeholder="Введите пароль" />
      <Input
        type="password"
        label="Повторите пароль"
        placeholder="Повторите пароль"
      />
      <Button onClick={() => dispatch(nextStep())} type={'button'}>
        Further
      </Button>
    </motion.form>
  );
};

export default StepBase;
