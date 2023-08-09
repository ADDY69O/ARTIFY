const mongoose = require("mongoose");
const User = require("./userModel");

const postSchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Use "User" here with an uppercase "U"
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  message: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  comments: [
    {
      sentBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Use "User" here with an uppercase "U"
        required: true,
      },
      sentAt: {
        type: Date,
        default: Date.now,
      },
      linked: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User", // Use "User" here with an uppercase "U"
        },
      ],
    },
  ],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
