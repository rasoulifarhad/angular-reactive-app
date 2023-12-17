var express = require("express");
var router = express.Router();
var _ = require("lodash");

const { dbData } = require("../db-data");

router.get("/courses/:id/lessons", (req, res, next) => {
  const courseId = parseInt(req.params["id"]) - 1;
  const courses = Object.values(dbData);
  const course = courses[courseId];
  const lessons = course.lessons;
  res.status(200).json(lessons);
});
router.get("/courses/:id", (req, res, next) => {
  const courseId = parseInt(req.params["id"]) - 1;
  const courses = Object.values(dbData);
  const course = courses[courseId];
  console.log("course: ", course);
  res.status(200).json({
    id: course.id,
    url: course.url,
    description: course.description,
    longDescription: course.longDescription,
    iconUrl: course.iconUrl,
    courseListIcon: course.courseListIcon,
  });
});

router.get("/courses", (req, res, next) => {
  var courses = _.map(Object.values(dbData), function toCourse(data) {
    return {
      id: data.id,
      url: data.url,
      description: data.description,
      longDescription: data.longDescription,
      iconUrl: data.iconUrl,
      courseListIcon: data.courseListIcon,
    };
  });
  res.status(200).json(courses);
});

module.exports = router;
