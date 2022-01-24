import {
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Slider,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCourse } from "../../actions/courseAction";
import Course from "../Home/Course";
import Loader from "../Loader/Loader";
import Bar from "../Header/Bar";
import "./Courses.css";
import Pagination from "react-js-pagination";


const universities = [
  "Presidency University",
  "Jain University",
  "Dayanad Sagar University",
  "Rv College",
  "Nagarjuna University",
  "Reva University",
];

const programlist = [
  "Under Graduate", 
  "Post Graduate"
];

const courseslist = [
  "Bachelor Of Arts And Bachelor Of Laws",
  "Bachelor Of Business Administration And Bachelor Of Laws",
  "Bachelor Of Business Administration",
  "Bachelor Of Commerce And Bachelor Of Laws",
];

const specializationlist = [
  "Bachelor Of Arts And Bachelor Of Laws",
  "Bachelor Of Business Administration And Bachelor Of Laws",
  "Marketing",
  "Human Resourse",
  "Digital Marketing"
];

const Courses = () => {
  const id = useParams();
  const dispatch = useDispatch();

  const [price, setPrice] = useState([0, 1200000]);
  const [university, setUniversity] = useState("");
  const [program, setProgram] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [coursename, setCourseName] = useState("");
  const [value, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { courses, loading, error, coursesCount, resultPerPage } = useSelector(
    (state) => state.courses
  );

  const keyword = id.keyword;

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const priceHandler = (e, newPrice) => {
    setPrice(newPrice);
  };

  const ProgramhandleChange = (event) => {
    setValue(event.target.value);
  };

  const CoursehandleChange = (event) => {
    setValue(event.target.value);
  };

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(
      getCourse(
        keyword,
        price,
        university,
        program,
        specialization,
        currentPage,
        coursename
      )
    );
  }, [
    dispatch,
    keyword,
    price,
    university,
    program,
    specialization,
    currentPage,
    coursename,
  ]);

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
                      Search Filter
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
                    <div className="Search_wrapper">
                      <input
                        type="text"
                        placeholder="Search"
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>
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
                      max={1200000}
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
                            onChange={ProgramhandleChange}
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
                      Course Filter
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
                      width: "350px",
                      flexWrap: "flex-wrap",
                    }}
                  >
                    {courseslist.map((xcourse) => (
                      <FormControl component="fieldset">
                        <RadioGroup
                          aria-label="courses"
                          name="courses"
                          value={value}
                          onChange={CoursehandleChange}
                          onClick={() => setCourseName(xcourse)}
                        >
                          <FormControlLabel
                            value={xcourse}
                            control={<Radio />}
                            label={xcourse}
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
              {resultPerPage < coursesCount && (
                <div className="paginationBox">
                  <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={resultPerPage}
                    totalItemsCount={coursesCount}
                    onChange={setCurrentPageNo}
                    nextPageText="Next"
                    prevPageText="Prev"
                    firstPageText="1st"
                    lastPageText="Last"
                    itemClass="page-item"
                    linkClass="page-link"
                    activeClass="pageItemActive"
                    activeLinkClass="pageLinkActive"
                  />
                </div>
              )}
              <div className="data_found_wrapper">
                <div className="result_found">
                  {" "}
                  Results Found : {courses.length}
                </div>
              </div>
              <Grid md={7} item>
                {courses &&
                  courses
                    .filter((value) => {
                      if (searchTerm === "") {
                        return value;
                      } else if (
                        value.coursename
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      ) {
                        return value;
                      } else if (
                        value.specialization
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      ) {
                        return value;
                      } else if (
                        value.university
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      ) {
                        return value;
                      }
                    })
                    .map((course, id) => <Course key={id} course={course} />)}
              </Grid>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Courses;
