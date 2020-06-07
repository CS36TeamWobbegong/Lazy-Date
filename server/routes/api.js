//declare required imports
//express
const express = require('express');
//maincontrolller
const maincontroller = require('../controllers/maincontroller');
//initialize router
const apiRouter = express.Router();

//router method for api/search received on server
apiRouter.post('/search/yelp', maincontroller.getYelpRecs, (req, res) =>
  res.status(200).json(res.locals.results)
);

apiRouter.get('/search/seatgeek', maincontroller.getSGRecs, (req, res) =>
  res.status(200).json(res.locals.results)
);

//export the router
module.exports = apiRouter;