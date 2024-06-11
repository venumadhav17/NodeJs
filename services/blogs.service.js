const Blogs = require('../models/blogs.models');

/*const findAllBlogs = async () => {
  try {
    const blogs = await Blogs.find({});
    return blogs;
  } catch (error) {
    //res.status(404).json({ message: 'Could Not Fetch Blogs from DB', error });
    throw new Error(error);
  }
};

const createBlogDocument = async (record) => {
  try {
    const newBlogDoc = new Blogs(record);
    const result = await newBlogDoc.save();
    return result;
  } catch (error) {
    //res.status(404).json({ message: 'Could Not Fetch Blogs from DB', error });
    throw new Error(error);
  }
}; */

class BlogService {
  find = async () => {
    const allBlogs = await Blogs.find({});
    return allBlogs;
  };

  findById = async (id) => {
    const allBlogs = await Blogs.findById(id);
    return allBlogs;
  };

  create = async (body) => {
    const newBlogDoc = await Blogs(body);
    const result = newBlogDoc.save();
    return result;
  };
}

module.exports = BlogService;

//module.exports = { findAllBlogs, createBlogDocument };
