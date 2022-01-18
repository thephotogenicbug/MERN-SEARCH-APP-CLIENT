import React, { useEffect } from "react";
import { Grid, Slider, Typography } from "@material-ui/core";
import Course from "./Course";
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../../actions/courseAction";

const useStyles = makeStyles({});

const Home = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { loading, error, courses } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(getCourse());
  }, [dispatch]);

  return (
    <>
      <Grid spacing={10} container className={classes.container}>
        <Grid md={3} item>
          <div>
            <div className="filter_wrapper">
              <Typography className="filter_typography" variant="h6">
                Price Filter
              </Typography>
              <div className="icons">
                <i className="fas fa-filter"></i>
              </div>
            </div>
            <div style={{ marginLeft: "2rem" }}>
              <Slider />
            </div>
            <div className="filter_wrapper">
              <Typography className="filter_typography" variant="h6">
                Program Filter
              </Typography>
              <div className="icons">
                <i className="fas fa-filter"></i>
              </div>
            </div>
            <div style={{ marginLeft: "2rem" }}></div>
            <div className="filter_wrapper">
              <Typography className="filter_typography" variant="h6">
                University Filter
              </Typography>
              <div className="icons">
                <i className="fas fa-filter"></i>
              </div>
            </div>
            <div style={{ marginLeft: "2rem" }}></div>
            <div className="filter_wrapper">
              <Typography className="filter_typography" variant="h6">
                Specialization Filter
              </Typography>
              <div className="icons">
                <i className="fas fa-filter"></i>
              </div>
            </div>
            <div style={{ marginLeft: "2rem" }}></div>
          </div>
        </Grid>
        <Grid md={7} item>
          {courses && courses.map((course) => <Course course={course} />)}
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
