const Post = require("../models/postModel");
const User = require("../models/userModel");

const createPost = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      res.status(500).json({ message: "Unauthorized" });
    }
    const { message, image } = req.body;
    const post = new Post({
      createdBy: req.user._id,
      message,
      image,
    });

    await post.save();
    user.posts.push(post._id);
    await user.save();

    res.status(201).json({ post, message: "Post created successfully" });
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
    const post = await Post.find(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.createdBy.toString() != req.user._id.toString()) {
      return res.status(400).json({ message: "Unauthorized" });
    }

    await post.remove();
    const user = await User.find(req.user._id);
    const index = user.posts.indexOf(req.params.id);
    user.splice(index, 1);
    await user.save();

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

const LikeandDislike = async (req, res) => {
  try {
    const post = await Post.find(req.params.id);

    if (!post) {
      return res.status(400).json({ message: "Post not found" });
    }

    if (!post.likes.includes(req.user._id)) {
      post.likes.push(req.user._id);
      post.save();
      return res.status(200).json({ message: "liked Successfully" });
    } else {
      const index = post.likes.indexOf(req.user._id);
      post.likes.splice(index, 1);
      await post.save();
      return res.status(200).json({ message: "Disliked Successfully" });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const comment = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: "comment not found" });
    const post = await Post.find(req.params.id);
    if (!post) {
      return res.status(400).json({ error: "Post Not Found" });
    }

    post.comments.push({ user: req.user._id }, { comment: message });
    post.save();
    req.res.status(200).json({ message: "comment added successFully" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
const DeleteComment = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: "comment not found" });
    const post = await Post.find(req.params.id);
    if (!post) {
      return res.status(400).json({ error: "Post Not Found" });
    }

    post.comments.push({ user: req.user._id }, { comment: message });
    post.save();
    req.res.status(200).json({ message: "comment added successFully" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createPost,
  getPosts,
  getAllPosts,
  deletePost,
  updatePost,
  LikeandDislike,
  comment,
};
