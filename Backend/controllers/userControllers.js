const generateToken = require("../config/generateToken");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const { default: mongoose } = require("mongoose");
const Post = require("../models/postModel");

const createUser = async (req, res) => {
  try {
    const { name, email, password, image } = req.body;

    if (!name || !email || !image || !password) {
      return res.status(400).json({ error: "Filled the required entity" });
    }
    const userFind = await User.findOne({ email });
    if (userFind) {
      return res.status(400).json({ error: "User already present" });
    } else {
      const user = await User.create({ name, email, image, password });
      return res.status(200).json({
        message: "User created Successfuly",
        user,
        token: generateToken(user._id),
      });
    }
  } catch (err) {
    return res
      .status(400)
      .json({ message: "Internal Server Error", error: `${err}` });
  }
};

const updateUser = async (req, res, next) => {
  let user = await User.findById(req.user._id);

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  if (req.body.password) {
    req.body.password = await bcrypt.hash(req.body.password, 12);
  }

  user = await User.findByIdAndUpdate(req.user._id, req.body, {
    new: true,

    useFindAndModify: false,
  });
  return res
    .status(200)
    .json({ success: "true", message: "updated the user", user });
};

const loadUser = async (req, res) => {
  try {
    // console.log(req.user);
    return res.status(200).json({ success: "true", user: req.user });
  } catch (error) {
    return res.status(500).json("Login required");
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "user Not found" });
    }
    console.log(user);

    if (user && (await bcrypt.compare(password, user.password))) {
      return res.status(200).json({ user, token: generateToken(user._id) });
    } else {
      return res.status(400).json({ error: "Invalid Email or Password" });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.user._id);

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const posts = user.posts;
    for (let i in posts) {
      await Post.findByIdAndDelete(i);
    }

    res
      .status(200)
      .json({ success: "true", message: "Successfully Deleted the user" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    console.log(req.user);
    const AllUsers = await User.find({
      _id: { $ne: new mongoose.Types.ObjectId(req.user._id) },
    })
      .populate("following", "_id name email image")
      .populate("followers", "_id name email image")
      .populate("posts");

    if (!AllUsers) {
      req.status(400).json({ message: "Users not found" });
    }

    res.status(200).json({
      success: "true",
      message: "Fetched the users",
      Alluser: AllUsers,
    });
  } catch (error) {
    res.status(400).json({ success: "false", message: error });
  }
};

const FollowUnfollow = async (req, res) => {
  try {
    const userTofollow = await User.findById(req.params.id);
    if (userTofollow.length === 0) {
      return res.status(400).json({ message: "user not found" });
    }

    const loggedUser = await User.findById(req.user._id);
    if (loggedUser.length === 0) {
      return res.status(400).json({ message: "login required" });
    }
    if (
      !userTofollow.followers.includes(req.user._id) &&
      !loggedUser.following.includes(req.params.id)
    ) {
      loggedUser.following.push(req.params.id);
      userTofollow.followers.push(req.user._id);
      await loggedUser.save();
      await userTofollow.save();
      return res.status(200).json({ message: "follow Successfully" });
    }
    const index1 = loggedUser.following.indexOf(req.params.id);
    const index2 = userTofollow.followers.indexOf(req.user._id);
    loggedUser.following.splice(index1, 1);
    userTofollow.followers.splice(index2, 1);
    await loggedUser.save();
    await userTofollow.save();
    return res.status(200).json({ message: "Unfollow Successfully" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const singleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("posts");
    if (!user) {
      return req.res(400).json({ meesage: "user not found" });
    }

    return res.status(200).json({ message: "user found", user });
  } catch (error) {
    return res.status(400).json({ message: error.meesage });
  }
};

module.exports = {
  createUser,
  login,
  deleteUser,
  updateUser,
  getUsers,
  FollowUnfollow,
  singleUser,
<<<<<<< HEAD
  loadUser,
=======
>>>>>>> ef0438f4d61a9a05955611cb40f0edadf3c6e99a
};
