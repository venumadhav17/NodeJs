//const { String } = require('joi');
const mongoose = require('mongoose');

/* const blogSchema = new mongoose.Schema({
  title: String,
  authors: [String],
  content: String,
  publishedAt: Date,
}); */

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    author: { type: [String] },
    content: { type: String, default: 'This is the default content' },
    publishedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

const blogModel = mongoose.model('Blogs', blogSchema); // Blogs here is collection name in mongodb automatically
// we perform any operations using this model
module.exports = blogModel;
