const express = require('express')
const router = express.Router()
const { getPeople, createPeople, updatePeople, deletePeople } = require('../controllers/people')

// router.get('/', getPeople)
// router.post('/', createPeople)
// router.put('/:id', updatePeople)
// router.delete('/:id', deletePeople)

module.exports = router;

// alternative way of writing
router.route('/').get(getPeople).post(createPeople)
router.route('/:id').put(updatePeople).delete(deletePeople)