const mongoose = require("mongoose");
// create restaurant schema 
const RestaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);

module.exports = RestaurantModel;
