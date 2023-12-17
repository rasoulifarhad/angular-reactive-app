var express = require("express");
var router = express.Router();

const auth = {
  "john@gmail.com": "test123",
  "bill@gmail.com": "test456",
};

const users = {
  "john@gmail.com": {
    firstName: "John",
  },
  "bill@gmail.com": {
    firstName: "Bill",
  },
};

router.post("/login", (req, res, next) => {
	const payload = req.body;
	console.log("verifying password ...", payload);
	if (auth[payload.email] && auth[payload.email] === payload.password) {
		res.status(200).json(users[payload.email])
	} else {
		res.sendStatus(500);
	}
});

module.exports = router;
