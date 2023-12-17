var express = require('express');
var router = express.Router();
var data = require('../db-data')

var _ = require('lodash');

const { dbData } = data; 

router.get("/lessons/:id", (req, res, next) => {
  const queryParams = req.query;

  console.log("queryParams: ", queryParams);
  const lessonUrl = queryParams.id;
  console.log("Looking for lesson with Url ", lessonUrl);

  let allLessons = [];

  Object.values(dbData).forEach(
    (course) => (allLessons = allLessons.concat(course.lessons))
  );

  const lesson = _.find(allLessons, (lesson) => lesson.url === lessonUrl);
  console.log("lesson: ", lesson);

  res.status(200).json(lesson);
});


module.exports = router;
  