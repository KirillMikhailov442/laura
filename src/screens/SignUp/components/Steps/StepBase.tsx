import { FC, useEffect, useRef } from 'react';
import styles from './Steps.module.scss';
import { Button, Input } from '@components/index';
import { motion } from 'framer-motion';
import useAppDispatch from '@/hooks/useAppDispatch';
import { nextStep } from '@store/slices/registration';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const StepBase: FC = () => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      copyOfPassword: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().trim().required('Enter name'),
      email: Yup.string()
        .trim()
        .email('Incorrect mail')
        .required('Enter email'),
      password: Yup.string()
        .trim()
        .max(25, 'The password must contain no more than 25 characters')
        .min(8, 'The password must contain at least 8 characters')
        .required('Enter password'),
      copyOfPassword: Yup.string()
        .trim()
        .oneOf([Yup.ref('password')], 'Does not match the password')
        .required('Does not match the password'),
    }),
    onSubmit: () => {},
  });

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <motion.form
      onSubmit={formik.handleSubmit}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      className={styles.form}
    >
      <Input
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name={'firstName'}
        error={formik.errors.firstName}
        type="text"
        label="Name"
        placeholder="Enter name"
        ref={inputRef}
      />
      <Input
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name={'lastName'}
        error={formik.errors.lastName}
        type="text"
        label="Surname (not necessarily)"
        placeholder="Enter surname"
      />
      <Input
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name={'email'}
        error={formik.errors.email}
        type="email"
        label="Email"
        placeholder="Enter email"
      />
      <Input
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name={'password'}
        error={formik.errors.password}
        type="password"
        label="Password"
        placeholder="Enter password"
      />
      <Input
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name={'copyOfPassword'}
        error={formik.errors.copyOfPassword}
        type="password"
        label="Repeat password"
        placeholder="Repeat password"
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

export default StepBase;
