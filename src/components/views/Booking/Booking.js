import React from 'react';

import styles from './Booking.scss';

const Booking = (props) => (
  <div className={styles.component}>
    <h2>Booking view</h2>
    {props.match.params.id}
  </div>
);

export default Booking;
