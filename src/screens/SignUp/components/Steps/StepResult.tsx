import styles from './Steps.module.scss';
import { FC, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Avatar } from '@chakra-ui/react';
import { Button, Input, Textarea } from '@/components';
import { AtSign, Pencil, UserRoundPlus } from 'lucide-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const StepResult: FC = () => {
  const [isEdit, setIsEdit] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      nickname: '',
      email: '',
      description: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().trim().required('Enter name'),
      nickname: Yup.string()
        .trim()
        .min(8, 'Incorrect nickname')
        .max(25, 'Incorrect nickname')
        .required('Enter nickname'),
      email: Yup.string().email('Incorrect email').required('Enter email'),
    }),
    onSubmit: () => {},
  });

  const handleEdit = () => {
    setIsEdit(prev => !prev);
    if (inputRef.current) inputRef.current.focus();
  };
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
        type={'text'}
        label={'Name'}
        placeholder={'Enter name'}
        defaultValue={'Mojave'}
        readOnly={!isEdit}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name={'firstName'}
        error={formik.errors.firstName}
        ref={inputRef}
      />
      <Input
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name={'lastName'}
        type={'text'}
        label={'Surnname'}
        placeholder={'Enter surname'}
        readOnly={!isEdit}
      />
      <Input
        type={'text'}
        label={'Nickname'}
        placeholder={'Enter @nickname'}
        icon={<AtSign size={18} />}
        defaultValue={'Mojave'}
        readOnly={!isEdit}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name={'nickname'}
        error={formik.errors.nickname}
      />
      <Input
        type={'email'}
        label={'Email'}
        placeholder={'Enter email'}
        defaultValue={'fakemail@gmail.com'}
        readOnly={!isEdit}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name={'email'}
        error={formik.errors.email}
      />
      <Textarea
        label={'Description'}
        placeholder={'Enter description'}
        rows={4}
        readOnly={!isEdit}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name={'description'}
      />
      <footer className={styles.footer}>
        <Button onClick={handleEdit} variant={'outline'}>
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
