import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import axios from 'axios';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Covid = () => {
    const [covidData,setData] = useState([]);
    const getData = async  () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const data = await res.json();
            setData(data.statewise[0]);
        } catch (error) {
            console.log(error);
        }
        }

    useEffect(() => {
        // async function getData() {
        //     const res = await axios.get("https://api.covid19india.org/data.json");
        //     const data = await res.json();
        //     setData(data.statewise[0]);
        // };
        getData();
    }, []);

    const classes = useStyles();

  return (
    <>
     
    <section>
      <h1> 🔴 Live </h1>
      <h2 style={{color: "red"}} > COVID-19 CASES LIVE UPDATE!!! </h2>
      <ul>
      <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <span>  </span> Country
        </Typography>
        <Typography variant="h5" component="h2">
          INDIA
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <span> Total </span> Recovered
        </Typography>
        <Typography variant="h5" component="h2">
          {covidData.recovered}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <span> Total </span> Confirmed
        </Typography>
        <Typography variant="h5" component="h2">
        {covidData.confirmed}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <span> Total </span> Active
        </Typography>
        <Typography variant="h5" component="h2">
        {covidData.active}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <span> Total </span> Death
        </Typography>
        <Typography variant="h5" component="h2">
        {covidData.deaths}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <span> Last </span> Updated
        </Typography>
        <Typography variant="h5" component="h2">
        {covidData.lastupdatedtime}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
      </ul>
      </section>
    </>
  );
}

export default Covid;