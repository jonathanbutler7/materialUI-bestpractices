import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from '@material-ui/core';
import React from 'react';

function Select(props) {
  const { name, label, value, onChange, options } = props;
  console.log(options)
  return (
    <FormControl variant='outlined'>
      <InputLabel>{label}</InputLabel>
      <MuiSelect label={label} name={name} value={value} onChange={onChange}>
        <MenuItem>None</MenuItem>
        {options.map((option) => (
          <MenuItem value={option.id}>{option.title}</MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
}

export default Select;
