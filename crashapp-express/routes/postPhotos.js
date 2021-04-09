const express = require("express");
const postPhotos = express.Router();

postPhotos
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the photos to you");
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end("POST operation not supported on /photo");
  })
  .put((req, res) => {
    res.end("Will put photos on server");
  })
  .delete((req, res) => {
    res.statusCode = 403;
    res.end("DELETE operation not supported on /photo");
  });

module.exports = postPhotos;
