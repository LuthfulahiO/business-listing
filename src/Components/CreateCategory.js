/* eslint-disable no-script-url */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function CreateCategory() {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const [isError, setError] = React.useState(false);
  const [open, setOpen] = React.useState(false)
  const handleChange = event => {
    setName(event.target.value);
  };
  const handleSubmit = () => {
    if(name === ""){
      setError(true);
      return
    }
    setError(false);
    if(localStorage.getItem('categories')){
      let tempCategory = JSON.parse(localStorage.getItem("categories"));
      tempCategory.push(name);
      localStorage.setItem("categories", JSON.stringify(tempCategory));
      setOpen(true)
      setName('')
    }else {
      let tempCategory = [name];
      localStorage.setItem("categories", JSON.stringify(tempCategory));
      setOpen(true)
      setName('')
    }
  }
  const handleClose = (event) => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Category added successfully</span>}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
      <Title>Create Category</Title>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {isError ? <p style={{'color':'red'}}>* Name is required</p> : ''}
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={name}
            onChange={handleChange}
            id="name"
            label="Category Name"
            name="name"
            autoFocus
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            className={classes.submit}
          >
            Create
          </Button>
      </div>
    </Container>
    </React.Fragment>
  );
}