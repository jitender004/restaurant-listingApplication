const mongoose = require("mongoose");

// create admin schema refrencing restaurant
const AdminSchema = new mongoose.Schema({
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
  },
  reviews: {
    type: Number,
  },
  dateTime: {
    type: Date,
    default: Date.now,
  },
});

//create admin model
const adminModel = mongoose.model("admin", AdminSchema);
module.exports = adminModel;
