import React from 'react';

import styles from './Booking.module.scss';

const Booking = ({match}) => {
  const {id} = match.params;
  return (
  <div className={styles.component}>
    <h2>Booking view</h2>
    {id}
  </div>
)};

export default Booking;
