const router = require('express').Router();

const apiRoutes = require('./api');
router.use('/api', apiRoutes);

const homeRoutes = require('./home-routes');
router.use('/', homeRoutes);

const dashboardRoutes = require('./dashboard-routes.js');
router.use('/dashboard', dashboardRoutes);

const searchRoutes = require('./search-routes');
router.use('/search', searchRoutes);

const reviewRoute = require('./review');
router.use('/review', reviewRoute);

const myPostsRoutes = require('./my-posts-routes');
router.use('/my-posts', myPostsRoutes);

const editPostRoutes = require('./edit-post');
router.use('/edit-post', editPostRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;