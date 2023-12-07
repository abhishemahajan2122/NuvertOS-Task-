const express = require("express");
const route = express.Router();
const controller = require("../controllers/compoundController");
route.get("/compound", controller.getAllCompounds);
route.get("/compound/:id", controller.getCompound);
route.put("/compound/:id", controller.updateCompound);
route.post("/compound", controller.addCompound);
route.delete("/compound/:id", controller.deleteCompound);
module.exports = route;
