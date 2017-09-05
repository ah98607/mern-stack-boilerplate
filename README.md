# MERN Boilerplate
* https://daveceddia.com/create-react-app-express-backend/
* https://daveceddia.com/create-react-app-express-production/
* Changed app.listens
* Removed the second router js file
* Added Heroku port configuration
* Added Mongoose directory “models” and the data App.js tries to get.
* Added Heroku mongoose configuration
* Changed app.js to server.js
* Installed module "concurrently" (not needed)
* Changed top level package.json so it concurrently run two servers (not needed)
* Changed top level package.json so it has post Heroku script
* Changed route.js to handle "*" so it points to client/build/index.html
* Changed server.js to make "build" static and public
* Installed module "react-materialize", changed index.html and App.js to include materialize CSS