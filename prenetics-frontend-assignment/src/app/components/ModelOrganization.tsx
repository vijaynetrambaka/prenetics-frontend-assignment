import * as React from 'react';
import {Box,Button,Dialog,DialogActions,DialogContent,DialogTitle,InputLabel
,OutlinedInput
,MenuItem,
FormControl,
Select

} from '@material-ui/core';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
// import InputLabel from '@mui/material/InputLabel';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
import SelectChangeEvent from "@material-ui/core/Select";
import {useOrganizationContext} from '../hooks/useContext/organizationContext'

export default function DialogSelect() {
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState<number | string>('');
  const {name,setName} =useOrganizationContext();

  const handleChange = (event: any) => {
    //setAge(Number(event.target.value) || '');
    setAge(event.target.value || '');
    setName(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
    
  };

  const handleClose = (event: React.SyntheticEvent<unknown>, reason?: string) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>Your Organization:{name}</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Select Organization</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel htmlFor="demo-dialog-native">Organization</InputLabel>
              <Select
                native
                value={name}
                onChange={handleChange}
                input={<OutlinedInput label="Age" id="demo-dialog-native" />}                
              >
                <option aria-label="None" value="" />
                <option value="Prenetics">Prenetics </option>
                <option value="Circle">Circle</option>
                <option value="BlackSheep">BlackSheep</option>
               
              </Select>
            </FormControl>
            
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}