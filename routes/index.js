const express = require("express");
const operationController = require("../controller/operations");

const router = express.Router();

router.post("/recursos/add", operationController.addBirthday);
router.get("/recursos", operationController.showAllBirthdays);
router.get(
  "/recursos/show-by-month/:mes",
  operationController.showBirthdaysByMonth
);
router.put("/recursos/edit-by-name/:nome", operationController.editByName);
router.delete("/recursos/delete-by-name/:nome", operationController.deleteByName);

module.exports = router;
