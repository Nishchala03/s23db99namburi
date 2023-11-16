var express = require('express');
const icecream_controlers= require('../controllers/icecream');
var router = express.Router();
/* GET icecream */
router.get('/', icecream_controlers.icecream_view_all_Page );
/* GET detail icecream page */
router.get('/detail', icecream_controlers.icecream_view_one_Page);
/* GET create icecream page */
router.get('/create', icecream_controlers.icecream_create_Page);
module.exports = router;
