import * as React from 'react';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { PrimaryButtonInterface } from '../../interfaces/forms/primaryButton.interface';

export default function PrimaryButton({
  variant,
  title,
  size,
  onPress,
  fontSize,
  fontWeight,
  type,
  style,
  disabled,
  startIcon
}: PrimaryButtonInterface) {
  return (
    <Button
      variant={variant}
      disabled={disabled}
      sx={style}
      size={size}
      onClick={onPress}
      type={type}
      startIcon={startIcon}
    >
      <Typography fontSize={fontSize} fontWeight={fontWeight}>
        {title}
      </Typography>
    </Button>
  );
}
