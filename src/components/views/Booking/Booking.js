import React from 'react';
import PropTypes from 'prop-types';

import styles from './Booking.module.scss';

const Booking = (props) => {
  return (
    <div className={styles.component}>
      <h2>Booking view</h2>
      {props.match.params.id}
    </div>
  );};

Booking.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.string,
};

export default Booking;
