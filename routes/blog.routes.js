const express = require('express');
const router = express.Router();

router.get("/blog", (req, res, next) => {
    const currentUser = req.session.currentUser;
    res.render("blog", {currentUser});
  });
  
  
module.exports = router;