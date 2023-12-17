var express = require('express');
var router = express.Router();
var data = require('../db-data')

var _ = require('lodash');

const { dbData } = data; 

router.get('/lessons', (req, res, next) =>{
	const queryParams = req.query;

	console.log('queryParams: ', queryParams);
	const courseId = parseInt(queryParams.courseId) - 1,
		//   filter = queryParams.filter || '',
		//   sortOrder = queryParams.sortOrder,
		pageNumber = parseInt(queryParams.pageNumber),
		pageSize = parseInt(queryParams.pageSize);
		//   sortColumn = queryParams.sortColumn ?? "seqNo";
  
  
	const lessons = Object.values(dbData)[courseId].lessons;

	const start = (pageNumber - 1) * pageSize;
	const end = start + pageSize;

	const lessonsPage = _.slice(lessons, start, end);
	res.status(200).json({payload: lessonsPage.map(buildLessonSummary)} );
			  
});

		
function buildLessonSummary({url, description, duration, tags, videoUrl, longDescription}, index) {
	return {
		url,
		description,
		seqNo: index,
		duration,
		tags,
		videoUrl,
		longDescription

	}
}

module.exports = router;
  