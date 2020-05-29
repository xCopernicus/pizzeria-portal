import React from 'react';
import PropTypes from 'prop-types';

import styles from './DisplayProductParam.module.scss';

const DisplayProductParam = ({label, options}) => (
  <div className={styles.component}>
    <p>{label}:</p>
    {Object.keys(options).map(option => (
      <div className={styles.option} key={option}>
        {options[option]}
      </div>
    ))}
  </div>
);

DisplayProductParam.propTypes = {
  options: PropTypes.object,
  label: PropTypes.string,
};

export default DisplayProductParam;
