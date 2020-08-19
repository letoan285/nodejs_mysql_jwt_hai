const router = require('express').Router();
const { checkToken } = require('../../auth/token_validation');

const {
    createUser,
    getUsers,
    loginUser,
    registerUser
    // deleteUser,
    // updateUser,
    // getUser

} = require('./user.controller');

router.get('/', checkToken, getUsers);
router.post('/', checkToken, createUser);
router.post('/register', registerUser);
// router.put('/:id', updateUser);
// router.delete('/:id', deleteUser);
router.post('/login', loginUser);

///users

module.exports = router;