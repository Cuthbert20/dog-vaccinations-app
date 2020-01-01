const express = require("express");
const router = express.Router();
const ctrl = require("../controller");

//no need to use /api/members because of middleware on index.js

router.get("/", ctrl.getMembers);

module.exports = router;
