const router = require('express').Router();
const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

router.use('/', homeRoutes);
router.use('/dashboard', dashboaardRoutes);
router.use('/api', apiRoutes);

module.exports = router;