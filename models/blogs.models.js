const mongoose = require('mongoose');

const blogSchema = new mongoose.schema({
  title: String,
  authors: [String],
  content: String,
  publishedAt: Date,
});

const blogModel = mongoose.model('Blogs', blogSchema, 'websiteBlogs'); // Blogs here is collection name in mongodb automatically
// we perform any operations using this model
module.exports = blogModel;
