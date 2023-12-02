import { TextFieldVariants } from '@mui/material/TextField';

export interface TextInputInterface {
  variant?: TextFieldVariants | undefined;
  style?: Object;
  disabled?: boolean;
  id?: any;
  rows?: number;
  type?: string;
  name?: string;
  value?: any;
  label?: string;
  error?: any;
  InputRef?: any;
  multiline?: boolean;
  fullWidth?: boolean;
  required?: boolean;
  placeholder?: string;
  InputProps?: any;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e?: any) => undefined | void;
}
