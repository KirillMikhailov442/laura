'use client';

import styles from './SignIn.module.scss';
import clsx from 'clsx';
import { Button, Input } from '@/components';
import google_img from '@images/google.svg';
import github_img from '@images/github.svg';
import Image from 'next/image';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignInScreen = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnBlur: false,
    validationSchema: Yup.object({
      email: Yup.string()
        .trim()
        .email('Incorrect email')
        .required('Enter email'),
      password: Yup.string().trim().required('Enter password'),
    }),
    onSubmit: () => {},
  });
  return (
    <div className={clsx('fullPage', styles.page)}>
      <div className={clsx('container', styles.container)}>
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <h1 className={styles.title}>Authorization</h1>
          <Input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name={'email'}
            error={formik.errors.email}
            type={'email'}
            label={'Email'}
            placeholder={'Enter email'}
          />
          <Input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name={'password'}
            error={formik.errors.password}
            type={'password'}
            label={'Password'}
            placeholder={'Enter password'}
          />
          <Button disabled={Object.keys(formik.errors).length >= 1}>
            Login
          </Button>
        </form>

        <p className={styles.or}>OR</p>
        <footer className={styles.oauth}>
          <Button variant={'outline'}>
            <Image src={google_img} alt={'google'} width={25} height={25} />{' '}
            Sign in with Google
          </Button>
          <Button variant={'outline'}>
            <Image src={github_img} width={25} height={25} alt={'github'} />
            Sign in with Github
          </Button>
        </footer>
      </div>
    </div>
  );
};

export default SignInScreen;
