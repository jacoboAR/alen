const express = require("express");
const router = express.Router();
const fileController = require("../controllers/fileController");

router.post("/upload", fileController.upload);
router.get("/", fileController.getListFiles);
router.get("/:name", fileController.download);

module.exports = router;
