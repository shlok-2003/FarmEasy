const express = require("express");
const router = express.Router();
const prodController = require("./../controller/prodController");
const authController = require("./../controller/userController");

router.post("/postProduct", prodController.uploadFile, authController.protect, prodController.postProduct);
router.get("/getAllProducts", prodController.getAllProducts);

module.exports = router;