import React from 'react';
import PropTypes from 'prop-types';

import styles from './DisplayProductOptions.module.scss';

const DisplayProductOptions = ({options}) => (
  <div className={styles.component}>
    {Object.keys(options).map(option => (
      <div className={styles.option} key={option}>
        {options[option]}
      </div>
    ))}
  </div>
);

DisplayProductOptions.propTypes = {
  options: PropTypes.object,
};

export default DisplayProductOptions;
