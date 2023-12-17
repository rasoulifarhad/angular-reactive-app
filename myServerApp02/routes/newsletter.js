var express = require("express");
var router = express.Router();

router.post("/newsletter", (req, res, next) => {
  const payload = req.body;
  console.log("subscribing to newsletter ...", payload.email);

  res.status(200).send();
});

module.exports = router;
