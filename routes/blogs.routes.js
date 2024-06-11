const router = require('express').Router();
const {
  createNewBlog,
  searchAllBlogs,
  getAllBlogs,
  deleteBlogWIthId,
  updateBlogById,
} = require('../controllers/blogs.controller');

router.get('/', getAllBlogs);
router.get('/search', searchAllBlogs);
router.post('/new', createNewBlog);
router.delete('/:id', deleteBlogWIthId); //_id
router.patch('/:id', updateBlogById); //_id

module.exports = router;
