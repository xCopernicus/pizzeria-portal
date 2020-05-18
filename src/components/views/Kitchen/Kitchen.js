import React from 'react';

import {Container} from '@material-ui/core';
import {Row, Col} from 'react-flexbox-grid';

import styles from './Kitchen.module.scss';

const Kitchen = () => (
  <Container maxWidth='md'>
    <div className={styles.component}>
      <h2>Kitchen view</h2>
      <Row between='xs'>
        <Col xs={5} className={styles.orders}>
          <h3>Local</h3>
        </Col>
        <Col xs={5} className={styles.orders}>
          <h3>Delivery</h3>
        </Col>
      </Row>
    </div>
  </Container>
);

export default Kitchen;
