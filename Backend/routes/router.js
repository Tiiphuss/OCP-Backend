const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config');

const bookCtrl = require('../controllers/book')

router.get('/', auth, bookCtrl.getAllBooks);
router.get('/:id', auth, multer, bookCtrl.getOneBook);
router.post('/', auth, bookCtrl.createBook);
router.put('/:id', auth, multer, bookCtrl.modifyBook);
router.delete('/:id', auth, bookCtrl.deleteBook);


module.exports = router;