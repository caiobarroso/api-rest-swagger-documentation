const express = require("express");
const operationController = require("../controller/operations");

const router = express.Router();

router.post("/recursos/add", operationController.addBirthday);
router.get("/recursos/order-by-name", operationController.orderByName);
router.get(
  "/recursos/show-by-month/:mes",
  operationController.filterByMonth
);
router.put("/recursos/edit-by-name/:nome", operationController.editByName);
router.delete("/recursos/delete-by-name/:nome", operationController.deleteByName);
router.get("/recursos/show-by-initial/:inicial", operationController.showByInitial);
router.get("/recursos/show-by-date/:dia/:mes", operationController.showByDate);
router.get("/recursos/order-by-month", operationController.orderByMonth);

module.exports = router;
