import React, { ReactElement } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';

type Props = {
  classname?: string;
  formText?: string;
  onChange: (title: string) => void;
  options: Array<ReactElement>;
  value: string;
}

export default ({onChange, value, options, formText, classname}: Props) => {
  return (
    <FormControl className={classname}>
      <Select
        onChange={(event) => onChange(event.target.value)}
        value={value}
      >
        {options}
      </Select>
      {!!formText && <FormHelperText>{formText}</FormHelperText>}
    </FormControl>
  )
}