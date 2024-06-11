//const { String } = require('joi');
const mongoose = require('mongoose');
const validator = require('validator');

/* const blogSchema = new mongoose.Schema({
  title: String,
  authors: [String],
  content: String,
  publishedAt: Date,
}); */

// email and image url should be valid
// _id must be created to override duplicate ids
const authorSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      maxLength: 25,
    },
    twitterHandle: { type: String },
    email: {
      type: String,
      required: true,
      maxLength: 50,
      validate: (incomingEmail) => validator.isEmail(incomingEmail),
    }, // validate: (val) => true
    image: {
      type: String,
      validate: (incomingURL) => validator.isURL(incomingURL),
    },
  },
  { _id: false }
);

/*const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    author: { type: [String] },
    content: { type: String, default: 'This is the default content' },
    publishedAt: { type: Date, default: null },
  },
  { timestamps: true }
); */

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      /*validate: (value) => (condition) value.split(' ')[0] === 'The',*/
    },
    author: [authorSchema],
    content: { type: String, default: 'This is the default content' },
    publishedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

const blogModel = mongoose.model('Blogs', blogSchema); // Blogs here is collection name in mongodb automatically
// we perform any operations using this model
module.exports = blogModel;
