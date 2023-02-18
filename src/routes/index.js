const express = require("express");
const restaurantController = require("../controller");

const router = express.Router();

router.get("/", restaurantController.getRestaurant);

router.get("/:id", restaurantController.getSingleRestaurant);

router.post("/", restaurantController.addRestaurant);

router.patch("/:id", restaurantController.updateRestaurant);

router.delete("/:id", restaurantController.deleteRestaurant);

module.exports = router;
