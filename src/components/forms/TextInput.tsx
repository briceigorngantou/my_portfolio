import React from 'react';

import { Grid, TextField, Typography } from '@mui/material';
import { TextInputInterface } from '../../interfaces/forms/textInput.interface';

function TextInput({
  id,
  rows,
  type,
  name,
  value,
  label,
  error,
  style,
  variant,
  InputRef,
  multiline,
  disabled,
  fullWidth,
  required,
  onChange,
  placeholder,
  InputProps
}: TextInputInterface) {
  return (
    <>
      {type === 'number' ? (
        <TextField
          id={id}
          disabled={disabled}
          required={required}
          ref={InputRef}
          label={label}
          placeholder={placeholder}
          fullWidth={fullWidth}
          value={value}
          name={name}
          variant={variant}
          inputProps={{
            inputMode: 'numeric',
            pattern: '[0-9]'
          }}
          type={type}
          onChange={onChange}
          InputProps={InputProps}
        />
      ) : (
        <TextField
          id={id}
          disabled={disabled}
          required={required}
          ref={InputRef}
          sx={style}
          label={label}
          placeholder={placeholder}
          fullWidth={fullWidth}
          value={value}
          name={name}
          InputProps={InputProps}
          variant={variant || 'outlined'}
          type={type}
          onChange={onChange}
          rows={rows}
          multiline={multiline}
        />
      )}
      {error ? (
        <Grid sx={{ flex: 1 }}>
          <Typography
            sx={{
              color: 'red',
              letterSpacing: 0.5,
              textTransform: 'capitalize',
              fontSize: 12
            }}
          >
            {error}
          </Typography>
        </Grid>
      ) : null}
    </>
  );
}
export default TextInput;
