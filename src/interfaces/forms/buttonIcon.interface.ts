import React from 'react';

export interface ButtonIconInterface {
  disabled?: boolean;
  size?: 'large' | 'medium' | 'small';
  style?: Object;
  icon?: any;
  onPress?: (
    // eslint-disable-next-line no-unused-vars
    e?: any
  ) =>
    | React.MouseEventHandler<HTMLAnchorElement>
    | undefined
    | void
    | Promise<void>;
}
