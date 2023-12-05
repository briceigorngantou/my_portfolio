import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { ButtonIconInterface } from '../../interfaces/forms/buttonIcon.interface';

export default function ButtonIcon({
  disabled,
  size,
  style,
  onPress,
  icon
}: ButtonIconInterface) {
  return (
    <IconButton sx={style} size={size} disabled={disabled} onClick={onPress}>
      {icon}
    </IconButton>
  );
}
