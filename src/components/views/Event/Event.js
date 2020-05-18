import React from 'react';
import PropTypes from 'prop-types';

import styles from './Event.module.scss';

const Event = (props) => (
  <div className={styles.component}>
    <h2>Event view</h2>
    {props.match.params.id}
  </div>
);

Event.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.string,
};

export default Event;
