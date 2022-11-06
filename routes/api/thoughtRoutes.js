const router = require('express').Router();
const {
    getThought,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,   
} = require('/')

// GET and POST thought
router.route('/').get(getThought).post(createThought);

// GET,PUT,DELETE by single thought
router.route('/').get(getSingleThought).put(updateThought).delete(deleteThought);

// POST and DELETE by reaction
router.route('/').post(addReaction).delete(removeReaction);

module.exports = router;