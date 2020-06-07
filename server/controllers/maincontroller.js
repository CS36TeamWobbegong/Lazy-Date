const fetch = require('node-fetch')

//declare the contorller object
const maincontroller = {};

maincontroller.getYelpRecs = (req, res, next) => {
  //extract keywords from from the req.body? or req.params?
  //declare a variable to hold string of categories
  const urlString = req.body.categories;
  //declare a variable to hold string/number of zip code
  const urlLocation = req.body.location;
  //use object literals to build api call string with result limit of 5
  const apiCall = `https://api.yelp.com/v3/businesses/search?limit=5&term=${urlString}&location=${urlLocation}`;
  //example: https://api.yelp.com/v3/businesses/search?limit=5&term=hiking&location=90025
  //make API call with apiCall variable as first parameter, and second parameter as object with header auth key and stringify body command
  fetch(apiCall, 
    {
    //method: "GET",
    headers: {
       //yelpApiKey in header
      "Authorization": "Bearer osYDEYEU59-jf1Ng4VaMuSOnuXA46CO9qQWS1i1BQcsnfDjRjZjQ2owOdtq_i623ntNkIXZqXbr9JWuYHbUjD5mY2N6f3H7vhk77v5itlJ75Tin70sN38cN71fvaXnYx"
    },
      //body: json stringify
    //body: JSON.stringify(data) 
    })
    //then process results from API call into json
    .then(data => {
      console.log('made it to first then');
      return data.json()})
    //then assign results to res.locals.results
    .then(results => {
      res.locals.results = results;
    //console.log for development purposes to see what returns
    console.log('This is results', res.locals.results);
    //return next()
    return next()})
    .catch(err => {
      console.log(err);
      res.status(400).send('Getting recommendations failed')
    })
    //ulitmately return results as an array of objects
};

maincontroller.getSGRecs = (req, res, next)=> {

}

module.exports = maincontroller;