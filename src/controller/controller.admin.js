const mongoose = require("mongoose");
const restaurant = require("../models/restaurant");

// get restaurant details by id
module.exports.getRestaurantDetails = (id, callback) => {
  restaurant
    .find({ senderId: id }, callback)
    .populate({ path: "senderId", select: ["name"] });
};

