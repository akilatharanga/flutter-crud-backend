const productsController = require("../controller/products.controller");
const express = require("express");
const router = express.Router();

router.post("/products", productsController.create);
router.get("/products", productsController.findAll);
router.get("/products:id", productsController.findOne);
router.put("/products:id", productsController.update);
router.delete("/products", productsController.delete);

module.exports = router;
