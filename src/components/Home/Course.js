import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getCourse} from '../../actions/courseAction'

const useStyles = makeStyles({
  root: {
    maxWidth: "1000px !important",
    margin: "1rem",
    marginTop: "42px",
  },
  cardcontent: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "-20px",
  },
  cardcontent2: {
    marginBottom: "3px",
    color: "#333",
    fontSize: "17px",
  },
  data: {
    fontSize: "15px",
  },
  button: {
    textDecoration: "none",
  },
  title: {
    textTransform: "uppercase",
    fontSize: "18px",
    margin: "1%",
  },
  subtitle: {
    textTransform: "uppercase",
    fontSize: "15px",
    color: "#666464",
    margin: "1%",
  },
});

export default function Course({ course }) {
  const classes = useStyles();



  return (
    <Card className="card-root">
      <CardActionArea>
        <CardContent className={classes.cardcontent}>
          <Typography className={classes.title}>{course.university}</Typography>
          <Typography variant="h6">
            <Button size="small" color="primary">
              <Link to="/" className={classes.button}>
                View Details
              </Link>
            </Button>
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" className={classes.cardcontent2}>
            <i className="far fa-arrow-alt-circle-up card-icon"></i>
            Specialization:
            <label class={classes.data}>
              <span className={classes.subtitle}>{course.specialization}</span>
            </label>
          </Typography>
          <Typography variant="body2" className={classes.cardcontent2}>
            <i className="fas fa-university card-icon"></i>University:
            <label class={classes.data}>
              {/* <span className={classes.subtitle}></span> */}
              <span className={classes.subtitle}>{course.university}</span>
            </label>
          </Typography>
          <Typography variant="body2" className={classes.cardcontent2}>
            <i class="fas fa-globe card-icon"></i>Country:
            <label class={classes.data}>
              {/* <span className={classes.subtitle}></span> */}
              <span className={classes.subtitle}>{course.country}</span>
            </label>
          </Typography>
          <Typography variant="body2" className={classes.cardcontent2}>
            <i class="fas fa-money-bill card-icon"></i>Yearly Tuition Fees:{" "}
            <span className={classes.subtitle}>{course.totalfee}</span>
          </Typography>
          <Typography variant="body2" className={classes.cardcontent2}>
            <i class="far fa-clock card-icon"></i>Duration:{" "}
            <span className={classes.subtitle}>{course.duration}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
