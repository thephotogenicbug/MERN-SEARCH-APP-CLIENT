import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCourse } from "../../actions/courseAction";
import { Grid, Slider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Course from "../Home/Course";


const useStyles = makeStyles({});

const Courses = () => {
  const classes = useStyles();
  const id = useParams();
  const dispatch = useDispatch();

  const { courses, loading, error, coursesCount } = useSelector(
    (state) => state.courses
  );

  const keyword = id.keyword

  useEffect(() =>{
     dispatch(getCourse(keyword))
  },[dispatch, keyword])

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
          {courses &&
            courses.map((course) => (
              <Course key={course._id} course={course} />
            ))}
        </Grid>
      </Grid>
      <div></div>
    </>
  );
};

export default Courses;
