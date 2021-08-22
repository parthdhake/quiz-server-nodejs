const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userController");

router.post("/", userControllers.createUser);

router.get("/profile/:uid", (req, res) => {
  const userID = req.params.uid;
});

module.exports = router;
