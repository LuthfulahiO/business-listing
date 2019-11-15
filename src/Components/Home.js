import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = JSON.parse(localStorage.getItem("businesses"));

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Business Listing
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Business Listings
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              See your business listings here
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                  <Link to={'/signin'}>Log in as Admin</Link>
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h2" component="h1">
                      {card.name}
                    </Typography>
                    <Grid container spacing={3}>
                    <Grid item md={6} xs={6} lg={6}>
                        <b>Description</b>
                    </Grid>
                    <Grid item md={6} xs={6} lg={6}>
                        <Typography>
                        {card.description}
                        </Typography>
                    </Grid>
                    <Grid item md={6} xs={6} lg={6}>
                        <b>Category</b>
                    </Grid>
                    <Grid item md={6} xs={6} lg={6}>
                        <Typography>
                        {card.businessCategory ? card.businessCategory.map(category => <div>{category}</div>) : ''}
                        </Typography>
                    </Grid>
                    <Grid item md={6} xs={6} lg={6}>
                        <b>Website</b>
                    </Grid>
                    <Grid item md={6} xs={6} lg={6}>
                        <Typography>
                        {card.url}
                        </Typography>
                    </Grid>
                    <Grid item md={6} xs={6} lg={6}>
                        <b>Email</b>
                    </Grid>
                    <Grid item md={6} xs={6} lg={6}>
                        <Typography>
                        {card.email}
                        </Typography>
                    </Grid>
                    <Grid item md={6} xs={6} lg={6}>
                        <b>Phone</b>
                    </Grid>
                    <Grid item md={6} xs={6} lg={6}>
                        <Typography>
                        {card.phone}
                        </Typography>
                    </Grid>
                    <Grid item md={6} xs={6} lg={6}>
                        <b>Address</b>
                    </Grid>
                    <Grid item md={6} xs={6} lg={6}>
                        <Typography>
                        {card.address}
                        </Typography>
                    </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}