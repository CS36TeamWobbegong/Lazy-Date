//import fetch 
const fetch = require('node-fetch')
//import .env node
require('dotenv').config()
//saved api key in variable which has our .env api key as our value
const API_KEY = process.env.API_KEY
//declare the contorller object
const maincontroller = {};

//middleware for handling API get request to Yelp
maincontroller.getYelpRecs = (req, res, next) => {
  //declare a variable to hold string of categories
  const urlString = req.params.categories;
  //declare a variable to hold string/number of zip code
  const urlLocation = req.params.location;
  //use object literals to build api call string with result limit of 5
  const apiCall = `https://api.yelp.com/v3/businesses/search?limit=5&term=${urlString}&location=${urlLocation}&radius=5000`;
  //example: https://api.yelp.com/v3/businesses/search?limit=5&term=hiking&location=90025
  //make API call with apiCall variable as first parameter, and second parameter as object with header auth key and stringify body command
  fetch(apiCall,
    {
      headers: {
        //yelpApiKey in header; comes from the environmental variables
        "Authorization": API_KEY
      },

    })
    //then process results from API call into json
    .then(data => {
      return data.json()
    })
    //then assign results to res.locals.results
    .then(results => {
      //declare an empty array to hold components of results to send to client
      let newArr = [];
      //utilize a for loop to iterate through the results.businesses array
      for (let i = 0; i < results.businesses.length; i++) {
        //create a deconstructed object for businesses at each index
        const { name, image_url, url, location, display_phone } = results.businesses[i];
        //push the deconstructed object to the empty array 
        //ran join on the location.display_address to turn it into a string
        newArr.push({ name: name, image_url: image_url, url: url, location: location.display_address.join(', '), contact: display_phone })
      }
      //add newArr to the res locals results
      res.locals.results = newArr;
      //return results to router
      return next()
    })
    //add a catch for errors
    .catch(err => {
      return next({
        log: "Error in getYelpRecs" + err,
      })
    })
};


//middleware for fetching API request from seat geeks
//this is currently not used on front-end as the api fetch wasn't as flexible as that of yelp
//had intended to add a conditional in client request; would use seat geek if the random generated string included "event"
maincontroller.getSGRecs = (req, res, next) => {
  //declare a variable to hold string of categories
  const urlString = req.body.categories;
  //declare a variable to hold string/number of zip code
  const urlLocation = req.body.location;
  //use object literals to build api call string with result limit of 5
  const apiURL = `https://api.seatgeek.com/2/events?per_page=5&postal_code=${urlLocation}&q=${urlString}`
  fetch(apiURL,
    {
      headers: {
        //yelpApiKey in header
        'Authorization': 'add code here'//will need to obtain from Seat Geek and add to environmental variables
      }
    })
    //then process results from API call into json
    .then(data => {

      return data.json()
    })
    //then assign results to res.locals.results; similar to the yelp request, but didn't deconstruct results first
    .then(results => {
      const formattedResults = [];
      for (let i = 0; i < results.events.length; i++) {
        formattedResults.push({
          name: results.events[i].title,
          venue: results.events[i].venue.name,
          location: results.events[i].venue.address + ', ' + results.events[i].venue.extended_address,
          contact: results.events[i].url
        })
      }
      res.locals.results = formattedResults;
      return next();
    })
    .catch(err => {
      return next({ log: "Error in seatgeek request: ", err });
    })

}

module.exports = maincontroller;
