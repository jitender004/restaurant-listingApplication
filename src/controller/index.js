const express = require("express");
const router = express.Router();
const Restaurant = require("../models/restaurant");

const addRestaurant = async (req, res) => {
  try {
    const product = await Restaurant.create(req.body);
    return res.status(200).send(product);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};
const getRestaurant = async (req, res) => {
  try {
    const product = await Restaurant.find().lean().exec();
    return res.status(200).send(product);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};
const getSingleRestaurant = async (req, res) => {
  try {
    const product = await Restaurant.findById(req.params.id).lean().exec();
    return res.status(200).send(product);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};
const updateRestaurant = async (req, res) => {
  try {
    const product = await Restaurant.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    )
      .lean()
      .exec();
    return res.status(200).send(product);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};
const deleteRestaurant = async (req, res) => {
  try {
    const product = await Restaurant.findByIdAndDelete(req.params.id)
      .lean()
      .exec();
    return res.status(200).send(product);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

module.exports = {
  addRestaurant,
  getRestaurant,
  getSingleRestaurant,
  updateRestaurant,
  deleteRestaurant,
};
