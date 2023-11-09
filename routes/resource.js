var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var icecream_controller = require('../controllers/icecream');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/icecream', icecream_controller.icecream_create_post);
// DELETE request to delete Costume.
router.delete('/icecream/:id', icecream_controller.icecream_delete);
// PUT request to update Costume.
router.put('/icecream/:id', icecream_controller.icecream_update_put);
// GET request for one Costume.
router.get('/icecream/:id', icecream_controller.icecream_detail);
// GET request for list of all Costume items.
router.get('/icecream', icecream_controller.icecream_list);
module.exports = router;

    
