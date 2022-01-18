import { Grid} from '@material-ui/core';
import React from 'react'
import Course from './Course';
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles({

})

const course = {
  university: "Jain University",
  coursename: "Bachelor of Computer Applications",
  _id:"1"
};

const Home = () => {
    const classes = useStyles()
    return (
      <Grid spacing={10} container className={classes.container}>
        <Grid md={2} item></Grid>
        <Grid md={10} item>
          <Course course={course} />
        </Grid>
      </Grid>
    );
}

export default Home
