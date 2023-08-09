const Post = require("../models/postModel");

const createPost = async (req, res) => {
  try {
    const { message, image } = req.body;
    const post = new Post({
      createdBy: req.user._id,
      message,
      image,
    });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};
// for creating post it requires to add the image it add it by using link

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({ createdBy: req.user._id });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

const getAllPosts = async (req, res) => {
  try {
    // console.log(req.user);
    const posts = await Post.find({ createdBy: { $ne: req.user._id } });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findOneAndRemove({
      _id: req.params.id,
      createdBy: req.user._id,
    });
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

const updatePost = async (req, res) => {
  try {
    const post = await Post.findOneAndUpdate(
      {
        _id: req.params.id,
        createdBy: req.user._id,
      },
      { message: req.body.message, image: req.body.image },
      { new: true }
    );
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

module.exports = {
  createPost,
  getPosts,
  getAllPosts,
  deletePost,
  updatePost,
};
