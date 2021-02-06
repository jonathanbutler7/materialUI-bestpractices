import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

function useForm(initialFValues) {
  const [values, setValues] = useState(initialFValues);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return {
    values,
    setValues,
    handleChange,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1),
    },
  },
}));

function Form(props) {
  const classes = useStyles();
  return (
    <form className={classes.root} autoComplete='off'>
      {props.children}
    </form>
  );
}

export { useForm, Form };
