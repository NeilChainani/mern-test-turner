const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//create schema.
const ItemSchema = new Schema(
  {
    TitleName: { type: String, required: true }
  },
  { collection: "Titles" }
);
module.exports = Item = mongoose.model("item", ItemSchema);
