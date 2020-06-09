# WobbegongScratchProject
Lazy Date

Objective: To randomly generate date ideas/locations outside of the typical dinner and drinks plan.

Current Tech Stack: MongoDB, Express, Node, React

SET-UP NOTES:

1. You will need to obtain an API key for Yelp. Only one member of your team will need to do this. It is free and the key is generated once you create your "App".
  -Visit https://www.yelp.com/developers/documentation/v3/authentication for instructions on how to create your "App" and obtain an Authorization key.
  -Additional information on what is returned and how to structure API calls to Yelp can be found with at https://www.yelp.com/developers/documentation/v3/get_started
  -Project is currently set up to store the API key in .env

2. Need to create a database in MongoDB Atlas (or locally). Add URI or path to the .env file.

3. If you see an .env_sample file in your root directory, change name to .env and then store any necessary environmental variables here. 

4. If you elect to incorporate Seat Geek, you will also need to obtain an API key with them. This is also free and returned immediately after sign-up. For additional instructions and documentation on the API endpoints and requests, please visit: http://platform.seatgeek.com/.

5. There are no styling libraries installed on this version, so you will need to install the necessary dependencies if you plan to use them for your updates.  

ADDITIONAL NOTES: 

1. Add favorites function started, but not completed for connection from front-end to back-end.

2. App page is not set-up to display favorites with components.