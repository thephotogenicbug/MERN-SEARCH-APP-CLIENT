import { Grid, Slider, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCourse } from "../../actions/courseAction";
import Course from "../Home/Course";
import Loader from "../Loader/Loader";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({});

const universities = [
  "Jain University",
  "Annamalai University",
  "Singhania University",
  "Example University",
];

const programlist = [
  "Example Graduation",
  "Post Graduation",
  "Under Graduation",
];

const specializationlist = [
  "Mobile Application and Information Security",
  "Banking And Finance",
  "Business Studies",
];

const Courses = () => {
  const classes = useStyles();
  const id = useParams();
  const dispatch = useDispatch();

  const [price, setPrice] = useState([0, 6000]);
  const [university, setUniversity] = useState("");
  const [program, setProgram] = useState("");
  const [specialization, setSpecialization] = useState(""); 

  const { courses, loading, error, coursesCount } = useSelector(
    (state) => state.courses
  );

  const keyword = id.keyword;

  const priceHandler = (e, newPrice) => {
    setPrice(newPrice);
  };

  useEffect(() => {
    dispatch(getCourse(keyword, price, university, program, specialization));
  }, [dispatch, keyword, price, university, program, specialization]);

  return (
    <div>
      <>
        {loading ? (
          <Loader />
        ) : (
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
                <div
                  style={{
                    marginLeft: "2rem",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                  }}
                >
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
                <div style={{ marginLeft: "2rem" }}>
                  <ul className="categoryBox">
                    {programlist.map((xprogram) => (
                      <li
                        className="category-link"
                        key={xprogram}
                        onClick={() => setProgram(xprogram)}
                      >
                        {xprogram}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="filter_wrapper">
                  <Typography className="filter_typography" variant="h6">
                    University Filter
                  </Typography>
                  <div className="icons">
                    <i className="fas fa-filter"></i>
                  </div>
                </div>

                <div style={{ marginLeft: "2rem" }}>
                  <ul className="categoryBox">
                    {universities.map((uni) => (
                      <li
                        className="category-link active"
                        key={uni}
                        onClick={() => setUniversity(uni)}
                      >
                        {uni}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="filter_wrapper">
                  <Typography className="filter_typography" variant="h6">
                    Specialization Filter
                  </Typography>
                  <div className="icons">
                    <i className="fas fa-filter"></i>
                  </div>
                </div>
                <div style={{ marginLeft: "2rem" }}>
                  <ul className="categoryBox">
                    {specializationlist.map((xspecialization) => (
                      <li
                        className="category-link"
                        key={xspecialization}
                        onClick={() => setSpecialization(xspecialization)}
                      >
                        {xspecialization}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Grid>
            <Grid md={7} item>
              {courses &&
                courses.map((course) => (
                  <Course key={course._id} course={course} />
                ))}
            </Grid>
          </Grid>
        )}
      </>
    </div>
  );
};

export default Courses;
