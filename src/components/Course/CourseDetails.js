import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCourseDetails } from '../../actions/courseAction';

const CourseDetails = () => {
  const {id} = useParams()
  const dispatch = useDispatch()

  const {course, loading, error} = useSelector(state => state.courseDetails)

  useEffect(() =>{
    dispatch(getCourseDetails(id))
  },[dispatch, id, error, ])

  return (
    <Grid container>
      <Grid md={5}>
          
      </Grid>
      <Grid md={5}>
          HI
      </Grid>
    </Grid>
  );
};

export default CourseDetails;
