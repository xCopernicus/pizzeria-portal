import React from 'react';

import {Container} from '@material-ui/core';

import styles from './Dashboard.module.scss';

const Dashboard = () => (
  <Container maxWidth='md'>
    <div className={styles.component}>
      <h2>Dashboard</h2>
    </div>
  </Container>
);

export default Dashboard;
