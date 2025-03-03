import styles from './Steps.module.scss';
import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { Avatar } from '@chakra-ui/react';
import { Button, Input, Textarea } from '@/components';
import { AtSign, Pencil, UserRoundPlus } from 'lucide-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const StepResult: FC = () => {
  const [isEdit, setIsEdit] = useState(false);

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
        .matches(/^@/, 'Incorrect nickname')
        .min(8, 'Incorrect nickname')
        .max(25, 'Incorrect nickname')
        .required('Enter nickname'),
      email: Yup.string().email('Incorrect email').required('Enter email'),
    }),
    onSubmit: () => {},
  });

  const handleEdit = () => {
    setIsEdit(prev => !prev);
  };
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
        readOnly={isEdit}
      />
      <Input type={'text'} label={'Surnname'} placeholder={'Enter surname'} />
      <Input
        type={'text'}
        label={'Nickname'}
        placeholder={'Enter @nickname'}
        icon={<AtSign size={18} />}
        defaultValue={'@Mojave'}
        readOnly={isEdit}
      />
      <Input
        type={'email'}
        label={'Email'}
        placeholder={'Enter email'}
        defaultValue={'fakemail@gmail.com'}
        readOnly={isEdit}
      />
      <Textarea
        label={'Description'}
        placeholder={'Enter description'}
        rows={4}
        readOnly={isEdit}
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
