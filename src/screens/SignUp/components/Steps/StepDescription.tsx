import styles from './Steps.module.scss';
import { FC, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button, Input, Textarea } from '@/components';
import { AtSign } from 'lucide-react';
import { Avatar } from '@chakra-ui/react';
import useAppDispatch from '@/hooks/useAppDispatch';
import { nextStep } from '@store/slices/registration';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const StepDescription: FC = () => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const formik = useFormik({
    initialValues: {
      nickname: '',
      description: '',
    },
    validateOnBlur: false,
    validationSchema: Yup.object({
      nickname: Yup.string()
        .trim()
        .min(6, 'Nickname must be at least 6 characters')
        .max(25, 'The nickname must be no more than 25 characters')
        .required('Enter nickname'),
    }),
    onSubmit: () => {},
  });

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <motion.form
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      className={styles.form}
      onSubmit={formik.handleSubmit}
    >
      <Avatar className={styles.avatar} size={'xl'} name={'Mojave'} />
      <Input
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name={'nickname'}
        error={formik.errors.nickname}
        type={'text'}
        label={'Nickname'}
        placeholder={'Enter @nickname'}
        icon={<AtSign size={18} />}
        ref={inputRef}
      />
      <Textarea
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name={'description'}
        label={'Description (not necessarily)'}
        placeholder={'Enter description'}
        rows={4}
      />
      <Button
        disabled={Object.keys(formik.errors).length >= 1}
        onClick={() => dispatch(nextStep())}
        type={'button'}
      >
        Further
      </Button>
    </motion.form>
  );
};

export default StepDescription;
