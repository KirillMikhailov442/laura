import styles from './Steps.module.scss';
import { FC } from 'react';
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
  const formik = useFormik({
    initialValues: {
      nickname: '',
      description: '',
    },
    validateOnBlur: false,
    validationSchema: Yup.object({
      nickname: Yup.string()
        .trim()
        .matches(/^@/, 'Incorrect nickname')
        .min(8, 'Incorrect nickname')
        .max(25, 'Incorrect nickname')
        .required('Enter nickname'),
    }),
    onSubmit: () => {},
  });
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
