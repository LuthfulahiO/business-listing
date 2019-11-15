/* eslint-disable no-script-url */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Title from './Title';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const categories = JSON.parse(localStorage.getItem("categories")) ? JSON.parse(localStorage.getItem("categories")) : [];

export default function CreateBusiness() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    name: "",
    description: "",
    url: "",
    email: "",
    phone: "",
    address: "",
    businessCategory: [],
  })
  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }
  const handleChangeCategory = event => {
    const  options = event.target.value;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
        value.push(options[i]);
    }
    console.log(value)
    setState({businessCategory:value})
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if(localStorage.getItem('businesses')){
      let tempBusinesses = JSON.parse(localStorage.getItem("businesses"));
      tempBusinesses.push(state);
      localStorage.setItem("businesses", JSON.stringify(tempBusinesses));
      setState({
        name: "",
        description: "",
        url: "",
        email: "",
        phone: "",
        address: "",
        businessCategory: [],
      })
    }else {
      let tempBusinesses = [state];
      localStorage.setItem("businesses", JSON.stringify(tempBusinesses));
      setState({
        name: "",
        description: "",
        url: "",
        email: "",
        phone: "",
        address: "",
        businessCategory: [],
      })
    }
  }
  return (
    <React.Fragment>
    <Title>Create Business</Title>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} validate>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={state.name}
            onChange={handleChange}
            id="name"
            label="Business Name"
            name="name"          
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={state.description}
            onChange={handleChange}
            id="description"
            label="Business Description"
            name="description"           
          />
          <InputLabel id="mutiple-name-label">Category</InputLabel>
          <Select
          labelid="mutiple-name-label"
          id="mutiple-name"
          multiple
          fullWidth
          value={state.businessCategory}
          onChange={handleChangeCategory}
          input={<Input />}
        >
          {categories.map(category => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            value={state.url}
            onChange={handleChange}
            id="url"
            label="Business Website"
            name="url"       
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={state.email}
            onChange={handleChange}
            id="email"
            label="Business email"
            name="email"     
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={state.phone}
            onChange={handleChange}
            id="phone"
            label="Business Phone"
            name="phone"  
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={state.address}
            onChange={handleChange}
            id="address"
            label="Business address"
            name="address"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            className={classes.submit}
          >
            Create Business
          </Button>
        </form>
      </div>
    </Container>
    </React.Fragment>
  );
}