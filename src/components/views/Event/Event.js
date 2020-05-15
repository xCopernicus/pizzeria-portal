import React from 'react';

import styles from './Event.module.scss';

const Event = (props) => (
  <div className={styles.component}>
    <h2>Event view</h2>
    {props.match.params.id}
  </div>
);

export default Event;
