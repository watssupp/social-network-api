const router = require('express').Router();
const {
    getUser,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('')

// GET and POST by user
router.route('/').get(getUser).post(createUser);

// GET,PUT,DELETE by single user
router.route('/').get(getSingleUser).put(updateUser).delete(deleteUser);

// POST and DELETE by friend
router.route('/').post(addFriend).delete(removeFriend);

module.exports = router;