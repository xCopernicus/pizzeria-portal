import React from 'react'

const ProductOptionsRadios = (options) => {

  let optionKeys
  options ? optionKeys = Object.keys(options) : optionKeys = []

  return(
    <div>
      {optionKeys.map(option => (
        <label key={option}>
          <input
            type='radio'
            name='radio'
            value={options[option].price}
            />
          {options[option].label}, {options[option].price}
        </label>
      ))}
    </div>
  )}

export default ProductOptionsRadios;


/*import React from 'react'

import {RadioGroup, FormControlLabel, Radio} from '@material-ui/core'

const ProductOptionsRadios = (options) => {

  const [value, setValue] = React.useState(1);

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  let optionKeys
  options ? optionKeys = Object.keys(options) : optionKeys = []

  return(
    <RadioGroup aria-label='gender' name='gender1' value={value} onChange={handleChange}>
      {optionKeys.map(option => (
        <FormControlLabel value={options[option].price} control={<Radio />} label={`${options[option].label}, ${options[option].price}`} />
      ))}
    </RadioGroup>
  )}

export default ProductOptionsRadios;*/
