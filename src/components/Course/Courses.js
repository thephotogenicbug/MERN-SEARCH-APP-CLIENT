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
import { useNavigate, useParams } from "react-router-dom";
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
  "RV College",
  "Nagarjuna University",
  "Reva University ",
  "Indian Academy ",
  "Pes University ",
  "New Horizon College of Engineer",
  "MVJ",
  "Christ Academy",
  "BMS College of Engineering",
  "BMSIT",
  "RNSIT",
  "Ramaiah Institute of Technology",
  "Dayanad Sagar Institute",
  "RR Institutions",
  "SJC",
  "Acharya",
  "Indus Valley Group",
  "MCP/Mallige College Pharmacy",
  "Manjushree Institute of Allied Health Science",
  "Example",
  "Manjushrees College of Nursing",
  "Pavan Institutions",
  "Sles Institution",
  "SRCN / Sri Raghavendra School and College of Nursing",
  "Vikram Institution",
  "Kristu Jayanti College",
  "NITTE Mangalore",
  "PGMSRUAS",
  "UGMSRUAS",
  "SPURTHY",
  "IFIM",
];

const programlist = ["Under Graduate", "Post Graduate"];

const courseslist = [
  "Bachelor Of Arts And Bachelor Of Laws",
  "Bachelor Of Business Administration And Bachelor Of Laws",
  "Bachelor Of Business Administration",
  "Bachelor Of Commerce And Bachelor Of Laws",
  "Bachelor Of Computer Applications",
  "Bachelor Of Design",
  "Bachelor Of Technology",
  "Master Of Business Administration",
  "Masters In Technology",
  "Bachelor Of Commerce",
  "Bachelor Of Commerce Honors",
  "Doctor Of Philosophy",
  "Business Management Studies",
  "B.Tech Lateral",
  "Master Of Computer Application",
  "Master Of Laws",
  "Master Of Technology",
  "Bachelor Of Arts",
  "Bachelor Of Arts Honours",
  "Bachelor Of Vocational",
  "Master Of Arts",
  "Master Of Commerce",
  "Multimedia Messaging Service",
  "Master Of Science",
  "Post Graduate Diploma",
  "Bachelor Of Science",
  "Business Administration",
  "Banking, Financial Services And Insurance",
  "B.Tech Bachelor Of Technology And Be Bachelor Of Engineering",
  "Master Of Engineering  Mtech Is Master Of Technology",
  "Bachelor Of Hotel Management",
  "Bachelor In Library And Information Science",
  "Post Graduate Diploma In Management",
  "Bachelor Of Physical Education Degree",
  "Legum Magister",
  "Master Of Philosophy",
  "Master Of Physical Education",
  "Bachelor Of Pharmacy",
  "Bachelor Of Architecture",
  "Master Of Library and Information Science",
  "Bachelor Of Business Management",
  "Master Of Pharmacy",
  "Bachelor Of Fine Arts",
  "Master Of Social Work",
  "Master Of Human Resource Management",
  "Post Graduate Diploma In Information Technology Management",
  "Bachelor Of Arts And Bachelor Of Law Hons",
  "Bachelor Of Science Honours",
  "Master Of Public Administration",
  "Bachelor Of Engineering",
  "Bachelor Of Arts And Bachelor Of Laws ",
  "Master Of Architecture In Habitat Design",
  "Master Of Computer Application ",
  "Lateral",
  "Bachelor Of Brchitecture",
  "Bachelor Of Education",
  "M.Tech Is Masters In Technology",
  "Master Of Architecture",
  "Master Of Computer Applications",
  "Bachelor Of Engineeing ",
  "Bachelor Of Engineeing Lateral Entry  ",
  "Bachelor Of Arcitecture ",
  "Polutechnic After 10Th Dipoma In Engineeing",
  "Master Of Pharmacy",
  "Master Of Pharmacy",
  "Bachelor Of Pharmacy ",
  "Doctor Of Pharmacy Degree",
  "Diploma In Pharmacy ",
  "General Nursing And Midwifery ",
  "Bachelor Of Science In Nursing",
  "Post-Basic Bachelor Of Science In Nursing",
  "Master Of Science In Nursing",
  "Medical Health Sciences",
  "Master Of Business Administration Dual Specialization",
  "Bachelor Of Education",
  "Bachelor Of Arts",
  "Bachelor Of Science",
  "Bachelor Of Social Work",
  "Bachelor Vocational",
  "Bachelor Of Commerce",
  "Bachelor Of Engineering Degree",
  "Master Of Technology",
  "Master Of Business Admin",
  "Post Graduate Dip In Mgm",
  "Bachelor Of Architecture",
  "Masters In Pharmacy",
  "Bachelor Of Pharmacy",
  "Doctor In Pharmacy",
  "Post Baccalaureate Pharm D",
  "D.Pharm Diploma In Pharmacy",
  "Diploma Courses In Engineering",
  "Legum Baccalaureus",
  "Bachelor In Visual Arts",
  "Bachelor Of Business Administration",
  "Bachelor Of Computer Application",
  "Bachelor Of Commerce",
  "Bachelor Of Science",
  "Bachelor Of Social Work",
  "Bachelor Of Arts",
  "Master Of Finance And Accounting",
  "Master Of Commerce",
  "Master Of Arts",
  "Master Of Social Work",
  "Bachelor Of Hospital Administration",
  "Master Of Nursing",
  "Post Basic B.Sc. In Nursing",
  "Basic B.Sc. Nursing",
  "Diploma In Nursing",
  "Bachelor Of Business Administration",
  "Bachelor Of Computer Applications",
  "Bachelor Of Commerce",
  "Business Administration BBA Aviation",
  "Bachelor Of Commerce Logistics",
  "Association Of Chartered Certified Accountants",
  "Bachelor Of Business Administration In Management",
  "Bachelor Of Business Administration In Media Management",
  "Bachelor Of Commerce Data Analytics and Visualization",
  "Bachelor Of Computer Application In Cloud Computing Program",
  "Bachelors In Computer Application",
  "Diploma In Medical Laboratory Technology",
  "Development Test Operational Test",
  "Dermatoglyphics Multi-Intelligence Test",
  "B Pharmacy",
  "Pharm D",
  "D.Pharmacy",
  "Bachelors In Science In Operation Theatre Technology",
  "Bachelor Of Science Renal Dialysis Technology",
  "Bachelor Of Science In Medical Imaging Technology",
  "Bachelor Of Science In Respiratory Therapy",
  "Bachelor Of Optometry",
  "Bachelor Of Science In Operation Theatre Technology",
  "Bachelor Of Science Renal Dialysistechnology",
  "Bachelor Of Science In Respiratory Care",
  "General Nursing And Midwifery",
  "Bachelor Of Science In Nursing",
  "Post Basic Bachelor Of Science Nursing",
  "Master Of Science Nursing",
  "Master Of Science Nursing Community Health",
  "General Nursing And Midwifery",
  "Bachelor Of Science In Nursing",
  "Post Basic Bachelor Of Science Nursing",
  "Master Of Science In Nursing",
  "Diploma In Pharmacy",
  "Bachelor Of Science In Anaesthesia",
  "Bachelor Of Science Operation Theatre Technology",
  "Bachelor Of Science  Optometry",
  "Bachelor Of Science In Medical Imaging Technology",
  "General Nursing And Midwifery",
  "Bachelor Of Science In Nursing",
  "Post Basic Bachelor Of Science Nursing",
  "Master Of Science In Nursing",
  "General Nursing And Midwifery",
  "Bachelor Of Science In Nursing",
  "Post Basic Bachelor Of Science Nursing",
  "Master Of Science In Nursing",
  "General Nursing and Midwifery",
  "Bachelor of Science in Nursing",
  "General Nursing and Midwifery",
  "Bachelor of Science in Nursing",
  "Bachelor Of Commerce",
  "Bachelor Of Business Administration",
  "Bachelor Of Computer Applications",
  "Bachelor Of Science In Commerce",
  "Bachelor Of Arts",
  "Master Of Business Administration",
  "Master Of Commerce",
  "Master Of Social Work",
  "Master Of Arts",
  "Bachelor Of Arts",
  "Bachelor Of Business Administration",
  "Post Graduate Diploma",
  "Bachelor Of Architecture",
  "Bachelor Of Medicine And Bachelor Of Surgery",
  "Bachelor Of Dental Surgery",
  "Doctor Of Pharmacy",
  "Post Baccalaureate",
  "Bachelor Of Pharmacy",
  "Bachelor Of Science In Nursing",
  "Post Basic Bsc Nursing",
  "Bachelor Of Physiotherapy",
  "Bachelor Of Science",
  "Master Of Technology",
  "Master Of Design",
  "Master Of Commerce",
  "Master Of Business Administration",
  "Master Of Science",
  "Master Of Pharmacy",
  "Master Of Dental Surgery",
  "Master Of Arts",
  "Bachelor In Technology",
  "Bachelor Of Design",
  "Bachelor Of Design",
  "Bachelor Of Pharmacy",
  "Doctor Of Pharmacy",
  "Bachelor Of Dental Surgery",
  "Bachelor Of Hotel Management",
  "Bachelor Of Commerce Honors",
  "Bachelor Of Business Administration",
  "Bachelor Of Science",
  "Bachelor Of Arts",
  "Bachelor Of Commerce",
  "Bachelor Of Business Administration",
  "Bachelor Of Computer Applications",
  "Bachelor Of Business Administration In Aviation",
  "Bachelor Of Commerce",
  "Bachelor Of Business Administration",
  "Bachelor Of Computer Applications",
  "Bachelor In Physiotherapy",
  "Bachelor Of Pharmacy",
  "Diploma In Pharmacy",
  "General Nursing And Midwifery",
  "Bachelor Of Science In Nursing",
  "Post Basic Bachelor Of Science In Nursing",
  "Master Of Science In Nursing",
  "Master Of Science In Nursing",
  "Post Graduate Diploma In Management",
  "Bachelor Of Computer Applications",
  "Bachelor Of Arts",
  "Bachelor Of Commerce",
  "Bachelor Of Computer Applications",
  "Master Of Business Administration",
  "Master Of Commerce",
  "Bachelor Of Business Administration & Bachelor Of Legislative Law",
  "Legum Baccalaureus",
];

const specializationlist = [
  "Bachelor Of Arts And Bachelor Of Laws",
  "Bachelor Of Business Administration And Bachelor Of Laws",
  "Marketing",
  "Human Resourse",
  "Digital Marketing",
  "Logistics And Supply Chain Management",
  "Business Analytics",
  "Aviation",
  "Finance",
  "Financial Technology",
  "E-Commerce And Supply Chain Management",
  "Bachelor Of Commerce And Bachelor Of Laws",
  "Augmented Reality/Virtual Reality",
  "Gaming And Graphics",
  "General",
  "Product Design",
  "Fashion Design",
  "Communication Design",
  "Space Design",
  "Game Design",
  "Civil Engineering",
  "Computer Science And Engineering",
  "Electrical And Electronics Engineering",
  "Electronics and Communication Engineering",
  "Mechanical Engineering",
  "Petroleum Engineering",
  "Infrastructure Development",
  "Power and Energy Systems",
  "Automotive Electronics",
  "Data Analytics",
  "Smart Cities",
  "Information Science and Rechnology, Internet Technologies",
  "Information Science and Engineering Business Analytics and Optimization",
  "Computer Science And Technology",
  "Artificial Intelligence And Machine Learning",
  "Data Science",
  "Cyber Security",
  "Internet Of Things",
  "Block Chain",
  "Mechatronics",
  "Additive Manufacturing",
  "Electronics And Computer Engineering, It Infrastructure",
  "Cloud Computing and Devops",
  "E-Commerce",
  "Human Resource Management",
  "Operations And Supply Chain Management",
  "Digital Transformation",
  "Intellectual Property Rights",
  "Technology Law",
  "Gender Studies",
  "Artificial Intelligence",
  "Data Science And Engineering",
  "Building Construction Technology",
  "Product Design And Development",
  "Vlsi Design and Embedded System",
  "Corporate Accounting and Taxation",
  "Banking And Finance",
  "Corporate Accounting",
  "Science And Humanities",
  "Management Studies",
  "Law",
  "Cloud Technology And Information Security",
  "Cloud Technology And Mobile Application",
  "Electives",
  "Mobile Application And Information Security",
  "It For Healthcare",
  "Cognitive Systems",
  "Uix",
  "Artificial Intelligence and Process Automation",
  "Industrial Design",
  "Communications and Media Design",
  "Lifestyle Product and Accessory Design",
  "Financial Services",
  "International Business",
  "Tourism and Hospitality Management",
  "International Marketing",
  "Healthcare Management",
  "Event Management and Public Relations",
  "Sports Management",
  "Aviation Management",
  "Branding And Entrepreneurship",
  "Digital Business",
  "International Finance",
  "Strategy And Leadership",
  "3D Printing",
  "Nanotechnology",
  "Aerospace Engineering",
  "Eelectronics and Communication Engineering",
  "Information Science and Engineering",
  "Aeronautical Engineering",
  "Software Engineering",
  "Automobile Engineering",
  "Robotics And Automation",
  "Cyber Security And Digital Forensics",
  "Cellular Technology",
  "Data Engineering And Informatics",
  "Bachelor Of Technology",
  "Working Professionals",
  "Finance And Human Resource Management",
  "Operations Management And Systems",
  "Luxury Management",
  "Entrepreneurship and Family Business",
  "Marketing And Human Resource Management",
  "Marketing And Finance",
  "Information Security Management Services",
  "Storage and Cloud Technology",
  "Infrastructure Management Services",
  "Master Of Laws",
  "Energy And Environmental Management",
  "Communication Systems",
  "Food Technology",
  "Structural Engineering",
  "Embedded Systems",
  "Aerodynamics",
  "Aerospace Propulsion Technology",
  "Avionics",
  "Structures And Design",
  "English",
  "Psychology",
  "Sociology",
  "Journalism And Mass Communication",
  "Economics",
  "Liberal Education",
  "Photography",
  "Animation",
  "Visual Effects",
  "Healthcare Tourism and Management",
  "Ui and Ux",
  "Advertising",
  "Graphic Design",
  "Game Development",
  "Film Making and Digital Production",
  "Music",
  "Professional",
  "Healthcare",
  "Bachelor Of Commerce",
  "Bachelor Of Vocational Studies",
  "Game Art and Design",
  "Public Governance and Administration",
  "Business Studies",
  "Financial Analysis",
  "Banking, Insurance And Financial Services",
  "Biochemistry",
  "Biotechnology",
  "Chemistry",
  "Forensic Sciences",
  "Microbiology",
  "Information Technology",
  "Physics",
  "Sports Psychology",
  "Capital Market Management",
  "Psychological Counseling",
  "B.Tech Computer Science And Engineering",
  "B.Tech Computer Science and Engineering Data Sciences",
  "B.Tech Computer Science and Engineering Cyber Security",
  "B.Tech Computer Science And Engineering Artificial Intelligence And Machine Learning",
  "B.Tech Electronics And Communication Engg",
  "B.Tech Mechanical Engineering",
  "B.Tech Computer Science And Technology",
  "B.Tech Aerospace Engineering",
  "Bca Bachelor Of Computer Applications",
  "Cloud Computing",
  "Embedded System",
  "Design Engineering",
  "Big Data/Internet Of Things",
  "Biotechnology, Biochemistry And Genetics",
  "Bio-Technology, Chemistry And Microbiology",
  "Microbiology, Genetics And Biochemistry",
  "Human Genetics",
  "Acca Integrated",
  "Cma Integrated",
  "With Ca  Coaching",
  "B.Pharm",
  "Pharm D",
  "Pg Programs",
  "M Pharma Pharmacology and Pharmaceutics",
  "Be Computer Science And Engineering",
  "Be Electronics And Communication Engineering",
  "Be Civil Engineering",
  "Be Mechanical Engineering",
  "Be Aerospace Engineering",
  "Be Biotechnology",
  "Be Electrical And Electronics Engineering",
  "Be Electronics And Instrumentation Engineering",
  "Be Electronics And Telecommunication Engineering",
  "Be Industrial Engineering And Management",
  "Be Information Science And Engineering",
  "Be Chemical Engineering",
  "M.Tech Digital Communication Engineering",
  "M.Tech Product Design And Manufacturing",
  "M.Tech Vlsi Design And Embedded Systems",
  "M.Tech Biotechnology",
  "M.Tech Communication Systems",
  "M.Tech Computer Integrated Manufacturing",
  "M.Tech Computer Network And Engineering",
  "M.Tech Computer Science And Engineering",
  "M.Tech Information Technology",
  "M.Tech Machine Design",
  "M.Tech Power Electronics",
  "M.Tech Radio Frequency And Microwave Engineering",
  "M.Tech Software Engineering",
  "M.Tech Structural Engineering",
  "M.Sc Engineering By Research Computer Science And Engineering",
  "Ms Engineering By Research Bioinformatics",
  "Ms Engineering By Research Biomedical Signal Processing And Instrumentation",
  "Ms Engineering By Research Biotechnology",
  "Ms Engineering By Research Chemical Engineering",
  "Ms Engineering By Research Communication Systems",
  "Ms Engineering By Research Computer Integrated Manufacturing",
  "Ms Engineering By Research Computer Science And Engineering",
  "Ms Engineering By Research Digital Communication Engineering",
  "Ms Engineering By Research Highway Technology",
  "Ms Engineering By Research Information Technology",
  "Ms Engineering By Research Machine Design",
  "Ms Engineering By Research Power Electronics",
  "Ms Engineering By Research Product Design And Manufacturing",
  "Ms Engineering By Research Radio Frequency And Microwave Engineering",
  "Ms Engineering By Research Software Engineering",
  "Ms Engineering By Research Structural Engineering",
  "Ms Engineering By Research Tool Engineering Design",
  "Ms Engineering By Research Vlsi Design And Embedded Systems",
  "Bachelor Of Library And Information Science",
  "Cerification",
  "Diploma",
  "Master Of Business Administration",
  "Post Graduate Diploma ",
  "Post Graduate Diploma In Management",
  "Master Of Science",
  "Bachelor Of Physical Education Degree",
  "Bachelor Of Computer Applications",
  "Bachelor Of Science",
  "Legum Magister",
  "Masters In Technology",
  "Master Of Computer Application",
  "Bachelor Of Arts",
  "Master Of Arts",
  "Master Of Philosophy",
  "Master Of Physical Education",
  "Bachelor Of Pharmacy",
  "Bachelor Of Architecture",
  "Master Of Library and Information Science",
  "Bachelor Of Business Management",
  "Master Of Commerce",
  "Master Of Pharmacy",
  "Bachelor Of Fine Arts",
  "Master Of Social Work",
  "Master Of Human Resource Management",
  "Post Graduate Diploma In Information Technology Management",
  "Bachelor Of Business Administration",
  "Bachelor Of Arts And Bachelor Of Law Hons",
  "Bachelor Of Commerce Honors",
  "Doctor Of Philosophy",
  "Bachelor Of Science Honours",
  "Master Of Public Administration",
  "Diploma In Performing Arts",
  "International Business and Finance",
  "Botany",
  "Computer Science View Eligibility Criteria",
  "Electronics",
  "Genetics",
  "Mathematics",
  "Statistics",
  "Zoology",
  "Applied Genetics",
  "Organic Chemistry",
  "Journalism",
  "Hospitality And Event Management",
  "Human Capital Management",
  "Mbs",
  "Capital Market ",
  "Aritifcical Intelligence",
  "Automotive Engineing",
  "Machine Design",
  "Power Electronics And Drives",
  "Big Data Analytics",
  "M.Tech Research",
  "Thermal-Fluid",
  "Manufacturing Science And Engineering",
  "Embedded System Technologies",
  "Automobile Engineering ",
  "Computer Science And Engineering ",
  "Information Security And Cyber Forensics",
  "Human Resource",
  "Operations Management",
  "Marketing And Human Resource Management ",
  "Chemical Engineering",
  "Aerospace Engineering ",
  "Digital Electronics and Communication",
  "Transportation Engineering ",
  "Bachelor Of Arts And Bachelor Of Laws ",
  "Bio-Technology",
  "Medical Electronics",
  "Electronics and Instrumentation Engineering",
  "Industrical Engineering and Management",
  "Bachelor Of Engineering",
  "Bio-Medical Signal Processing and Instrumentation",
  "Biochemical Engineering",
  "Computer Network Engineering",
  "Construction Technology",
  "Digital Communication Engineering",
  "Environmental Engineering",
  "Power Electronics",
  "Transportation Engineering",
  "Master Of Architecture",
  "Telecommunication Engineering",
  "Engineering",
  "Computer Engineering",
  "Lateral Data Science",
  "Lateral Artificial Intelling Ence and Machine Learning ",
  "Vlsi Design",
  "Master Of Computer Application ",
  "Lateral",
  "Bachelor Of Brchitecture",
  "Industrial Engineering And Management",
  "Retail Management",
  "Banking And Insurance",
  "Computer Integrated Manufacturing",
  "Digital Communication",
  "Industrial Engineering",
  "Computer Applications In Industrial Drives",
  "Computer Applications",
  "Management Sciences",
  "B.Teah Computer Science And Engineering Data Sciences",
  "Master Of Computer Applications",
  "Bio Technology, Chemistry And Microbiology",
  "With Ca Coaching",
  "Civil Engineeing ",
  "Mechanical Engineeing ",
  "Computer Science Engineeing ",
  "Elecrtonics And Communition Engineeing ",
  "Information Science Engineeing ",
  "Elecrical And Electronics Engineeing ",
  "Civil Engineeing ",
  "Mechanical Engineeing ",
  "Computer Science Engineeing ",
  "Elecrtonics And Communition Engineeing ",
  "Information Science Engineeing ",
  "Elecrical And Electronics Engineeing ",
  "Bachelor Of Arcitecture ",
  "Civil Engineeing ",
  "Mechanical Engineeing ",
  "Elecrtonics And Communition Engineeing ",
  "Elecrical And Electronics Engineeing ",
  "Computer Science Engineeing ",
  "Pharmaceutics",
  "Pharmacognosy",
  "Bachelor Of Pharmacy ",
  "Doctor Of Pharmacy Degree",
  "Diploma In Pharmacy ",
  "General Nursing And Midwifery ",
  "Bachelor Of Science In Nursing",
  "Post-Basic Bachelor Of Science In Nursing",
  "Master Of Science In Nursing",
  "Radiography And Imaging Technology ",
  "Anestesia Technology And Operation Theatre Technology",
  "Optometry Technology ",
  "Radiography Technology ",
  "Master Of Business Administration Dual Specialization",
  "Bachelor Of Education",
  "History, Economics, Political Science Hep",
  "Economics, Pol. Science, Sociology Eps",
  "Industrial Relations, Economics, Sociology Ies",
  "Communicative English, Pschyology, English Cpe",
  "Public Policy, Industrial Relations, Journalism Jip",
  "Theatre & Performing Studies, Opt. English, Psychology Tep",
  "Optional Kannada, Journalism, Pschyology  Kjp Optional English, Journalism, Psychology Ejp",
  "Optional English, Journalism, Psychology Ejp",
  "Visual Communication Bvc",
  "Physics, Chemistry, Mathematics Pcm",
  "Physics, Electronics, Mathematics Pem",
  "Chemistry, Botany, Zoology Cbz",
  "Chemistry, Enviromental Science, Botany Ceb",
  "Chemistry, Enviromental Science, Zoology Cez",
  "Microbiology, Chemistry, Botany Mcb",
  "Microbiology, Chemistry, Zoology Mcz",
  "Physics, Mathematics, Computer Science Pmc",
  "Chemistry, Botany, Biotechnology Cbbt",
  "Chemistry, Zoology, Biotechnology Czbt",
  "Mathematics, Electronics, Computer Science Mec",
  "Economics, Mathematics, Statistics Ems",
  "Computer Science, Mathematics, Statistics Cms",
  "Biochemistry, Botany, Zoology Bbz",
  "Bachelor Of Social Work Bsw",
  "Bachelor Of Computer Applications Bca",
  "Bca Data Analytics",
  "B.Voc Visual Media And Film Making",
  "B.Voc Digital Media And Animation",
  "Bachelor Of Commerce",
  "Industry Integrated",
  "International Finance and Accounting",
  "Computer Science Engineering",
  "Aeronautical Engineering",
  "Information Science And Engineering",
  "Mechatronics Engineering",
  "Automobile Engineering",
  "Electronics And Communication Engg.",
  "Mechanical Engineering",
  "Biotechnology Engineering",
  "Civil Engineering",
  "Electrical And Electronics Engineering",
  "Computer Science",
  "Digital Communication",
  "Machine Design",
  "Biotechnology",
  "Master Of Business Admin.",
  "Post Graduate Dip. In Mgm",
  "Bachelor Of Architecture",
  "Pharmaceutics",
  "Pharmacology",
  "Ndustrial Pharmacy",
  "Quality Assurance",
  "Pharmaceutical Chemistry",
  "Drug Regulatory Affairs",
  "Pharmacognosy",
  "Pharmaceutical Analysis",
  "Bachelor Of Pharmacy",
  "Doctor In Pharmacy",
  "Post Baccalaureate Pharm D",
  "D.Pharm Diploma In Pharmacy",
  "Aeronautical Engineering",
  "Architecture Engineering",
  "Automobile Engineering",
  "Mechanical Engineering",
  "Mechatronics Engineering",
  "Computer Science Engineering",
  "Civil Engineering",
  "Electrical And Electronics Engineering",
  "Electronics And Communication Engg.",
  "Apparel Design And Fabrication Technology",
  "Commercial Practice",
  "Legum Baccalaureus",
  "Bachelor Of Arts",
  "Bachelor Of Business Administration",
  "Graphic Design",
  "Animation And Multimedia Design",
  "Product Design",
  "Nterior And Spatial Design",
  "Painting",
  "Bachelor Of Business Administration",
  "In Aviation",
  "Bachelor Of Computer Application",
  "Bachelor Of Commerce",
  "Physics Chemistry Maths Computer Science",
  "In Fashion And Apparel Design",
  "Bachelor Of Social Work",
  "Journalism Marketing Psy Economics English",
  "Criminology",
  "Psychology",
  "English Economics",
  "Mathematics",
  "Physics",
  "Chemistry",
  "Journalism And Mass Communication",
  "Master Of Social Work",
  "Anesthesia Technology",
  "Operation Theatre Technology",
  "Respiratory Care Technology",
  "Renal Dialysis Technology",
  "Medical Lab Technology",
  "Optometry",
  "Radio Therapy",
  "Maging Technology",
  "Bachelor Of Hospital Administration",
  "Master Of Nursing",
  "Post Basic B.Sc. In Nursing",
  "Basic B.Sc. Nursing",
  "Diploma In Nursing",
  "Tourism",
  "Professional",
  "Association Of Chartered Certified Accountants.",
  "Honours",
  "Logistics And Suppily Chain Management ",
  "Business Analytics",
  "Certified Management Accountant",
  "Integrated With Chartered Global Management Accountant",
  "Aviation Management ",
  "Businession Analytices ",
  "Analytics ",
  "Computer Sciences And Mathematics Electronics",
  "Computer Sciences Mathematices Statistice ",
  "Physics Mathematices Coumputer Sciences ",
  "Physics Mathematics Eletronics ",
  "Mathematics Statistics Economics",
  "Forenic Science",
  "Biotechnology Biochemistry Genetics",
  "Microbiology Biochemistry Genetics",
  "Botany Biotechnology Biochemist ",
  "History Economics Political Sciences ",
  "Tourism History Journalism ",
  "Jouralism Psychology Computer Science",
  "Jouralism Psychology English Literature",
  "Jouranlism Political Science English Literature ",
  "Economics Pol Science Sociology",
  "Journalism Economics ",
  "Honours",
  "Performing Arts Psychology ",
  "Null",
  "International Finances",
  "Financial Analysis ",
  "Microbiology ",
  "Biotechnology",
  "Psychology",
  "Computer Scinces ",
  "Counselling Psychology",
  "Biochemistry",
  "Economics",
  "English Literature",
  "Jouranalism And Mass Communication ",
  "Legum Baccalaureus",
  "Marketing Management",
  "Human Resources Management",
  "Business Administration",
  "Biomedical Science",
  "Anaesthesia And Operation Theatre Technology",
  "Medical Imaging Technology",
  "Respiratory Therapy",
  "Medical Lab Technology",
  "Journalism & Mass Comm",
  "Data Science And Engineering",
  "Manufacturing Technologies And Engineering Management",
  "Vlsi And Nanotechnology",
  "Power Electronics And Drives",
  "Aerospace Engineering",
  "Automotive Engineering",
  "Structural Engineering",
  "Construction Engineering And Management",
  "Environmental Engineering And Management",
  "Transportation Engineering",
  "Artificial Intelligence and Machine Learning",
  "Advanced Machinery Design",
  "Robotic Engineering",
  "Product Design",
  "Fashion Design",
  "Null",
  "In Financial Management",
  "In Human Resource Management",
  "In Marketing Management",
  "In Operations Management",
  "In Small Business And Entrepreneurship",
  "In Business Analytics",
  "In Hospitality Management",
  "In Hospitality Management",
  "In Pharma Business Management",
  "In Pharma Business Management",
  "Physics/Chemistry/Mathematics",
  "Biotechnology",
  "Molecular And Cellular Biology",
  "Food Science And Technology",
  "In Public Health",
  "Master Of Hospital Administration",
  "Pharmacognosy",
  "Pharmaceutical Chemistry",
  "Pharmaceutics",
  "Pharmacology",
  "Pharmacy Practice",
  "Oral and Maxillofacial Surgery",
  "Oral Medicine",
  "Periodontology",
  "Orthodontics and Dentofacial Orthopedics",
  "Pediatric Dentistry",
  "Conservative Dentistry And Endodontics",
  "Prosthodontics And Crown and Bridge",
  "Oral and Maxillofacial Pathology And Oral Microbiology",
  "Public Health Dentistry",
  "Public Policy",
  "Product Design",
  "Fashion Design",
  "Computer Science And Engineering",
  "Electronics And Communication Engineering",
  "Artificial Intelligence And Machine Learning",
  "Information Science And Engineering",
  "Aerospace Engineering",
  "Automotive Engineering",
  "Civil Engineering",
  "Electrical And Electronics Engineering",
  "Mechanical Engineering",
  "Robotics",
  "Mathematics And Computing",
  "Product Design",
  "Fashion Design",
  "Biotechnology",
  "Food Processing And Technology",
  "Medical Radiology And Imaging Technology",
  "Cardiac Care Technology",
  "Operation Theatre Technology",
  "Dialysis Therapy Technology",
  "Optometry",
  "Physics/Chemistry /Mathematics/Statistics/Computer Science/Electronics",
  "Economics",
  "Psychology",
  "Sociology",
  "Data Sciences And Analytics",
  "Legum Baccalaureus",
];

const Courses = () => {
  const id = useParams();
  const dispatch = useDispatch();

  const [price, setPrice] = useState([0, 6916500]);
  const [university, setUniversity] = useState("");
  const [program, setProgram] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [coursename, setCourseName] = useState("");
  const [value, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { courses, loading, error, coursesCount, resultPerPage } = useSelector(
    (state) => state.courses
  );

  const { userInfo } = useSelector((state) => state.user);

  let navigate = useNavigate();

  const keyword = id.keyword;

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const priceHandler = (e, newPrice) => {
    setPrice(newPrice);
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
        coursename,
        value
      )
    );
    if (!userInfo) {
      navigate("/");
    }
  }, [
    dispatch,
    keyword,
    price,
    university,
    program,
    specialization,
    currentPage,
    coursename,
    value,
    navigate,
    userInfo,
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
                      max={6916500}
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
                    <div className="course_filter_wrapper">
                      {courseslist.map((xcourse) => (
                        <FormControl component="fieldset">
                          <RadioGroup
                            aria-label="courses"
                            name="courses"
                            value={value}
                            onChange={handleChange}
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
                      marginLeft: "1.9rem",
                      display: "block",
                      width: "190px",
                    }}
                  >
                    <div className="uni_filter_wrapper">
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
                      marginLeft: "1.9rem",
                      display: "block",
                      width: "190px",
                    }}
                  >
                    <div className="spec_filter_wrapper">
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
