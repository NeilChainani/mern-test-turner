const express = require("express");
const router = express.Router();
const Item = require("../../models/item");

//route = get api/items
//desc = get all items
//access = public
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
//gets all the title data
router.get("/", (req, res) => {
  Item.find({})
    .select("TitleName")
    .then(items => res.json(items));
});
//gets all title data based on the wild card paramater send
router.get("/:id", (req, res) => {
  let searchString = req.params.id;
  let searchKey = new RegExp(searchString, "i");
  Item.find({ TitleName: searchKey })
    .select("TitleName")
    .then(items => res.json(items));
});
module.exports = router;
