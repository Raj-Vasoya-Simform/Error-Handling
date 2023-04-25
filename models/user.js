import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: "String",
    required: [true, "Please Enter Name"],
  },
  email: {
    type: "String",
    required: [true, "Please Enter Name"],
    unique: true,
  },
});
export const User = mongoose.model("User", schema);
