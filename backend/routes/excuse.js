const router = require('express').Router()

const {getExcuses, createExcuse, updateExcuse, getExcuseById, deleteExcuse} = require('../controller/excuseController')
const {protect} = require('../middleware/authMiddleware')


router.route('/').get(protect, getExcuses)
router.route('/create').post(protect, createExcuse)
router.route('/:id').get(getExcuseById).put(protect, updateExcuse).delete(protect, deleteExcuse)

module.exports = router