import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Slider, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCourse } from "../../actions/courseAction";
import Course from "../Home/Course";
import Loader from "../Loader/Loader";
import { makeStyles } from "@material-ui/styles";
import Bar from "../Header/Bar";
import './Courses.css'

const useStyles = makeStyles({
  root: {
    "&$checked": {
      color: "#1D5AD4",
    },
  },
  checked: {},
  wrap: {
    width: "100%",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 0,
  },
  label: {
    fontSize: "0.9rem",
    fontFamily: `"Raleway", sans-serif`,
    fontWeight: "600",
  },
});

const universities = [
  "Presidency University",
  "Annamalai University",
  "Singhania University",
  "Example University",
];

const programlist = [
  "Example Graduation",
  "Post Graduation",
  "Under Graduate",
  "Under Graduate",
  "Under Graduate",
  "Under Graduate",
  "Under Graduate",
  "Under Graduate",
  "Under Graduate",
  "Under Graduate",
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

  const [price, setPrice] = useState([0, 840000]);
  const [university, setUniversity] = useState("");
  const [program, setProgram] = useState("");
  const [specialization, setSpecialization] = useState(""); 
  const [value, setValue] = useState("");

  const { courses, loading, error, coursesCount } = useSelector(
    (state) => state.courses
  );

  const keyword = id.keyword;

  const priceHandler = (e, newPrice) => {
    setPrice(newPrice);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  console.log()

  useEffect(() => {
    dispatch(getCourse(keyword, price, university, program, specialization));
  }, [dispatch, keyword, price, university, program, specialization]);

  return (
    <>
      <Bar />
      {loading ? (
        <Loader />
      ) : (
        <div class="home">
          <div className="home_panelList-wrap">
            <div className="home_panel-wrap">
              {/* Side Panel */}
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
                      width: "300px",
                    }}
                  >
                    <Slider
                      value={price}
                      onChange={priceHandler}
                      valueLabelDisplay="auto"
                      aria-labelledby="range-slider"
                      min={0}
                      max={840000}
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
                  <div
                    style={{
                      marginLeft: "2rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      marginTop: "20px",
                      width: "200px",
                    }}
                  >
                    <div className="filter_component">
                      {programlist.map((xprogram) => (
                        <FormControl component="fieldset">
                          <RadioGroup
                            color="primary"
                            aria-label="programlist"
                            name="programlist"
                            value={value}
                            onChange={handleChange}
                            onClick={() => setProgram(xprogram)}
                          >
                            <FormControlLabel
                              value={xprogram}
                              control={<Radio />}
                              label={xprogram}
                            />
                          </RadioGroup>
                        </FormControl>
                      ))}
                    </div>
                  </div>
                  <div className="filter_wrapper">
                    <Typography className="filter_typography" variant="h6">
                      University Filter
                    </Typography>
                    <div className="icons">
                      <i className="fas fa-filter"></i>
                    </div>
                  </div>

                  <div
                    style={{
                      marginLeft: "2rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      marginTop: "20px",
                      width: "500px",
                    }}
                  >
                    {universities.map((uni) => (
                      <FormControl component="fieldset">
                        <RadioGroup
                          aria-label="universities"
                          name="universities"
                          value={value}
                          onChange={handleChange}
                          onClick={() => setUniversity(uni)}
                        >
                          <FormControlLabel
                            value={uni}
                            control={<Radio />}
                            label={uni}
                          />
                        </RadioGroup>
                      </FormControl>
                    ))}
                  </div>
                  <div className="filter_wrapper">
                    <Typography className="filter_typography" variant="h6">
                      Specialization Filter
                    </Typography>
                    <div className="icons">
                      <i className="fas fa-filter"></i>
                    </div>
                  </div>
                  <div
                    style={{
                      marginLeft: "2rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      marginTop: "20px",
                      width: "400px",
                    }}
                  >
                    {specializationlist.map((xspecialization) => (
                      <FormControl component="fieldset">
                        <RadioGroup
                          aria-label="specialization"
                          name="specialization"
                          value={value}
                          onChange={handleChange}
                          onClick={() => setSpecialization(xspecialization)}
                        >
                          <FormControlLabel
                            value={xspecialization}
                            control={<Radio />}
                            label={xspecialization}
                          />
                        </RadioGroup>
                      </FormControl>
                    ))}
                  </div>
                </div>
              </Grid>
            </div>
            <div className="home_list-wrap">
              <div className="data_found_wrapper">
                <div className="result_found">
                  {" "}
                  Results Found : {courses.length}
                </div>
              </div>
              <Grid md={7} item>
                {courses &&
                  courses.map((course) => (
                    <Course key={course._id} course={course} />
                  ))}
              </Grid>
            </div>
          </div>
        </div>
      )}
      {/* <div>
      <Bar />
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
                    max={840000}
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
                  {programlist.map((xprogram) => (
                    <FormControl component="fieldset">
                      <RadioGroup
                        color="primary"
                        aria-label="programlist"
                        name="programlist"
                        value={value}
                        onChange={handleChange}
                        onClick={() => setProgram(xprogram)}
                      >
                        <FormControlLabel
                          value={xprogram}
                          control={<Radio />}
                          label={xprogram}
                        />
                      </RadioGroup>
                    </FormControl>
                  ))}
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
                  {universities.map((uni) => (
                    <FormControl component="fieldset">
                      <RadioGroup
                        aria-label="universities"
                        name="universities"
                        value={value}
                        onChange={handleChange}
                        onClick={() => setUniversity(uni)}
                      >
                        <FormControlLabel
                          value={uni}
                          control={<Radio />}
                          label={uni}
                        />
                      </RadioGroup>
                    </FormControl>
                  ))}
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
                  {specializationlist.map((xspecialization) => (
                    <FormControl component="fieldset">
                      <RadioGroup
                        aria-label="specialization"
                        name="specialization"
                        value={value}
                        onChange={handleChange}
                        onClick={() => setSpecialization(xspecialization)}
                      >
                        <FormControlLabel
                          value={xspecialization}
                          control={<Radio />}
                          label={xspecialization}
                        />
                      </RadioGroup>
                    </FormControl>
                  ))}
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
    </div> */}
    </>
  );
};

export default Courses;
