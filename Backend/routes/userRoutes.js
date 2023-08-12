const express = require("express");
const { Router } = require("express");

const {
  createUser,
  login,
  deleteUser,
  updateUser,
  getUsers,
  FollowUnfollow,
  singleUser,
} = require("../controllers/userControllers");

const protect = require("../middleware/protect");
const router = express.Router();

// router.get('/',async(req,res)=>{
//     res.send("It worked ");

// })

router.route("/").post(createUser);
router.route("/login").post(login);
router.route("/log/update").put(protect, updateUser);
router.route("/log/delete").delete(protect, deleteUser);
router.route("/log/all").get(protect, getUsers);
router.route("/log/:id").get(protect, FollowUnfollow);
router.route("/:id").get(protect, singleUser);

module.exports = router;
