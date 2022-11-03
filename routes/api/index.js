const router = require('express');
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes')

router.use('/user',userRoutes);
router.use('/thought',thoughtRoutes)

module.exports = router;