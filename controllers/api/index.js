const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
// const searchRoutes = require("./search-routes");

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
// router.use('/search',searchRoutes);
// router.use('route-name', routeVariable);


module.exports = router;