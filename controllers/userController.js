import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { User } from "../models/user.js";
import ErrorHandler from "../utils/errorHandler.js";

export const newUser = catchAsyncError(async (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;

  const user = await User.findOne({ email: email });

  if (user) {
    return next(new ErrorHandler("User already exist", 400));
  }

  await User.create({
    name: name,
    email: email,
  });

  res.status(201).json({ msg: "User Created Successfully" });
});

export const allUsers = catchAsyncError(async (req, res, next) => {
  let user = await User.find();
  console.log(user);
  if (user.length === 0) {
    res.status(404).json({ Message: "No Data Found." });
  }
  res.status(200).json({ Data: user });
});
