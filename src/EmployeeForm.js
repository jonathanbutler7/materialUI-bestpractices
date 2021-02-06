import { Grid } from '@material-ui/core';
import { Controls } from './controls/Controls';
import { useForm, Form } from './useForm';
import * as employeeService from './services/employeeService';

const genderItems = [
  { id: 'male', title: 'male' },
  { id: 'female', title: 'female' },
  { id: 'other', title: 'other' },
];

const initialFValues = {
  id: 0,
  fullName: '',
  email: '',
  mobile: '',
  city: '',
  gender: 'other',
  hireDate: new Date(),
  isPermanent: false,
};

function EmployeeForm() {
  const { values, handleChange } = useForm(initialFValues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            label='Name'
            name='fullName'
            value={values.fullName}
            onChange={handleChange}
          />
          <Controls.Input
            label='Email'
            name='email'
            value={values.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name='gender'
            label='gender'
            value={values.gender}
            onChange={handleChange}
            items={genderItems}
          />
          <Controls.Select
            name='departmentId'
            label='Department'
            value={values.departmentId}
            onChange={handleChange}
            options={employeeService.getDepartmentCollection()}
          />
        </Grid>
      </Grid>
    </Form>
  );
}

export default EmployeeForm;
