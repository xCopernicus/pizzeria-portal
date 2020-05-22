import React from 'react';

import {Container, Button} from '@material-ui/core';

import styles from './Login.module.scss';

const Login = () => (
  <Container maxWidth='sm'>
    <div className={styles.component}>
      <h2>Login</h2>
      <form>
        <div className={styles.input}>
          <h3>Username</h3>
          <input type='text' />
        </div>
        <div className={styles.input}>
          <h3>Password</h3>
          <input type='text' />
        </div>
      </form>
      <Button variant='contained'>Login</Button>
    </div>
  </Container>
);

export default Login;
