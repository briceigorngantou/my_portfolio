import React from 'react';

export interface PrimaryButtonInterface {
  variant?: 'text' | 'contained' | 'outlined' | undefined;
  title?: any;
  type?: any;
  fontSize?: number;
  fontWeight?: any;
  style?: Object;
  startIcon?: any;
  size?: 'large' | 'medium' | 'small';
  disabled?: boolean;
  onPress?: (
    // eslint-disable-next-line no-unused-vars
    e?: any
  ) =>
    | React.MouseEventHandler<HTMLAnchorElement>
    | undefined
    | void
    | Promise<void>;
}
