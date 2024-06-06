const router = require('express').Router();
const {
  createNewBlog,
  getAllBlogs,
  deleteBlogWIthId,
  updateBlogById,
} = require('../controllers/blogs.controller');

router.get('/', getAllBlogs);
router.post('/new', createNewBlog);
router.delete('/:id', deleteBlogWIthId); //_id
router.patch('/:id', updateBlogById); //_id

module.exports = router;
