import { Grid, Slider, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCourse } from "../../actions/courseAction";
import Course from "../Home/Course";
import Loader from "../Loader/Loader";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles({});

const Courses = () => {
   const classes = useStyles();
  const id = useParams();
  const dispatch = useDispatch();

  const [price, setPrice] = useState([0, 6000]);

  const { courses, loading, error, coursesCount } = useSelector(
    (state) => state.courses
  );

  const keyword = id.keyword

  const priceHandler = (e, newPrice) => {
    setPrice(newPrice);
  };
  
  console.log(getCourse)

  useEffect(() =>{
    dispatch(getCourse(keyword, price))
  },[dispatch, keyword, price])

  return (
    <div>
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
                <Slider
                  value={price}
                  onChange={priceHandler}
                  valueLabelDisplay="auto"
                  aria-labelledby="range-slider"
                  min={0}
                  max={6000}
                />
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
      </>
    </div>
  );
};

export default Courses;
