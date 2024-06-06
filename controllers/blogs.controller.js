const Blogs = require('../models/blogs.models');

// creating a controller
/*const createNewBlog = (req, res) => {
  console.log(req.body);
  const newBlogDoc = new Blogs({
    title: 'The First Blog',
    content: 'Something',
  }); // new Blogs instance passing key-value pairs for the document
  //console.log(newBlogDoc);
  res.sendStatus(200);
}; */

/*const createNewBlog = async (req, res) => {
  //const {title} = req.body -> we can write in this way too.
  console.log(req.body);
  const newBlogDoc = new Blogs({ ...req.body }); // new Blogs({title})
  const result = await newBlogDoc.save();
  console.log(newBlogDoc);
  return res.json(result);
  //res.send(200);
}; */

const createNewBlog = async (req, res) => {
  try {
    //const {title} = req.body -> we can write in this way too.
    //console.log(req.body);
    const newBlogDoc = new Blogs({ ...req.body }); // new Blogs({title})-> instance -> for every successfull insertion of data we make a schema
    const result = await newBlogDoc.save();
    return res.json(result); // if return is not specified it takes implicitly and we can written return as explicity
  } catch (err) {
    return res.status(501).json(err);
  }
};

//Read all Blogs Data
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.find({});
    res.json(blogs);
  } catch (error) {
    res.status(404).json({ message: 'Could Not Fetch Blogs from DB', error });
  }
};

const deleteBlogWIthId = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const result = await Blogs.findOneAndDelete({ _id: id }); // when we want to use same id (_id) we need to check it in route folder & in all folders too(also).
    console.log(result);
    return res.json(result);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Couldn't delete blog post. Please try again!", error }); // if we have not written any error it display message present in catch block
  }
};

const updateBlogById = async (req, res) => {
  const { id } = req.params;
  const filter = { _id: id };
  const update = req.body;
  console.log(req.body);
  try {
    const result = await Blogs.findOneAndUpdate(filter, update, { new: true });
    return res.json(result);
  } catch (err) {
    return res
      .status(501)
      .json({ message: "Couldn't update blog post. Please try again!" });
  }
};

module.exports = {
  createNewBlog,
  getAllBlogs,
  deleteBlogWIthId,
  updateBlogById,
};
