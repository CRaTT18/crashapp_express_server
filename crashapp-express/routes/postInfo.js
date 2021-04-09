const express = require("express");
const postInfo = express.Router();

postInfo
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the info to you");
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end("POST operation not supported on /info");
  })
  .put((req, res) => {
    res.end("Will put info on server");
  })
  .delete((req, res) => {
    res.statusCode = 403;
    res.end("DELETE operation not supported on /info");
  });

module.exports = postInfo;
