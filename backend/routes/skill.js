const router = require('express').Router();


var skillController = require('../controller/skillController')

// get skills
router.get('/',skillController.get)


// get skill by id
router.get('/:id',skillController.getById)

// add new skill
router.post('/add', skillController.addSkill)


// update skill
router.post('/update/:id',skillController.update)

// delete skill
router.delete('/:id', skillController.delete)

module.exports = router;