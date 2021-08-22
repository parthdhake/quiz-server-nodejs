const User = require("../models/userModel");

const createUser = async (req, res) => {
  console.log("Helll");
  console.log(req.body);
  const { name, email, userID } = req.body;
  //   let existingUser;
  //   try {
  //     existingUser = await User.findOne({ email: email });
  //   } catch (err) {
  //     res.status(500);
  //     const error = new Error("Signing up failed, please try again later.");
  //     return next(error);
  //   }

  //   if (existingUser) {
  //     const error = new HttpError(
  //       "User exists already, please login instead.",
  //       422
  //     );
  //     return next(error);
  //   }
  const newUser = new User({
    name,
    email,
    userID,
  });

  await newUser.save();
  res.status(201).json({ user: newUser.toObject({ getters: true }) });
};

exports.createUser = createUser;
