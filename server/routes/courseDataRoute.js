const fs = require('fs');
const express = require('express');
const router = express.Router();
const courseData = './data/courseData.json';
const { v4: uuid } = require('uuid');


const readData = (filename) => {
  return JSON.parse(fs.readFileSync(`./data/${filename}.json`))
}

const writeData = (filename, data) => {
  return fs.writeFileSync(`./data/${filename}.json`, JSON.stringify(data, null, 4))
};


// get course data
router.get('/courses', (req, res) => {
  const data = fs.readFileSync(courseData);
  res.status(200).json(JSON.parse(data));
});

// get course by ID
router.get('/courses/:courseid', (req, res) => {
  const data = JSON.parse(fs.readFileSync(courseData));
  const course = data.find(item => item.CourseID === req.params.courseid)
  res.status(200).json(course);
});

// post new course
router.post('/add-course', (req, res) => {
  const { Img, CourseName, Holes, Par, ClubName, City, State, Country, FrontPar, BackPar, Slope, Rating, Hole1Par, Hole2Par, Hole3Par, Hole4Par, Hole5Par, Hole6Par, Hole7Par, Hole8Par, Hole9Par, Hole10Par, Hole11Par, Hole12Par, Hole13Par, Hole14Par, Hole15Par, Hole16Par, Hole17Par, Hole18Par } =req.body;
  const CourseID = uuid();
  const newCourseData = readData('courseData');

  newCourseData.push({
    CourseID, CourseName, Holes, Par, ClubName, City, State, Country, FrontPar, BackPar, Slope, Rating, Hole1Par, Hole2Par, Hole3Par, Hole4Par, Hole5Par, Hole6Par, Hole7Par, Hole8Par, Hole9Par, Hole10Par, Hole11Par, Hole12Par, Hole13Par, Hole14Par, Hole15Par, Hole16Par, Hole17Par, Hole18Par,
    Img: "https://www.gulfwindsresort.com/wp-content/uploads/2020/01/Golf-Courses-in-St-Petersburg-FL.jpg"
  });

  writeData('courseData', newCourseData);

  res.json(newCourseData)
})


module.exports = router;
