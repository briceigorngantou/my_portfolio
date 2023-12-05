import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useTheme } from '@mui/material/styles';
import DialogTitle from '@mui/material/DialogTitle';
import PrimaryButton from '../forms/PrimaryButton';

interface DialogInterface {
  text: string;
  title: string;
  action: (
    // eslint-disable-next-line no-unused-vars
    e?: any
  ) =>
    | React.MouseEventHandler<HTMLAnchorElement>
    | void
    | undefined
    | Promise<void>;
  handleClose: (
    // eslint-disable-next-line no-unused-vars
    e?: any
  ) =>
    | React.MouseEventHandler<HTMLAnchorElement>
    | undefined
    | void
    | Promise<void>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scroll: any;
  setScroll: React.Dispatch<React.SetStateAction<any>>;
}

export default function DialogComponent({
  text,
  action,
  handleClose,
  title,
  open,
  scroll
}: DialogInterface) {
  const theme = useTheme();

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <PrimaryButton
            title="Cancel"
            variant="outlined"
            fontSize={12}
            fontWeight={500}
            onPress={handleClose}
            style={{
              width: 100,
              height: 40,
              borderRadius: 1,
              borderColor: theme.palette.primary.main,
              borderWidth: 0.1,
              color: theme.palette.primary.main,
              backgroundColor: theme.palette.primary.light,
              ':hover': {
                color: theme.palette.primary.light,
                backgroundColor: theme.palette.primary.main
              }
            }}
          />
          <PrimaryButton
            title="Request a quotation"
            variant="outlined"
            fontSize={12}
            fontWeight={500}
            onPress={() => {
              handleClose();
              action();
            }}
            style={{
              width: 200,
              height: 40,
              borderRadius: 1,
              borderColor: theme.palette.primary.main,
              borderWidth: 0.1,
              color: theme.palette.primary.light,
              backgroundColor: theme.palette.primary.main,
              ':hover': {
                color: theme.palette.primary.main,
                backgroundColor: theme.palette.primary.light
              }
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}
