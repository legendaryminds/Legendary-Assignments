# Intro to Express

 #Initialize a new node project
    - npm init -y
    
    - npm install <dependencies>

    ex. npm install express uuid

    control c = to stop server

    clear = to clear terminal

    To get server to run = node server.js 

# Nodemon
    * npm install -g nodemon
                    nodemon server.js
    to run nodemom server.js or whatever the file is called

# Vocabulary

    # Route
        * An event listener for http requests

    # Endpoint
        * "/item" "/user"

    # Port
        * localhost:7777/

# Intro to REST API architectrure

    # REST - Representational State Transfer

    # Resource - Single item (object) in a database
    /user/jfsjie8jije

    # Collection - A collection of similar items in a database
    /users

    # Base (root) URL - http://amazon.com/

    # API Endpoint  - http://amazon.com/movies/dsafoe9iek

    # Parameters - /movies/:movieID

    # Query (query string) - movies?genre=action&year-1999

    # Client - Frontend

    # Server - Intermediary

    # Request Method - CRUD - GET POST PUT DELETE

    # Middleware - a function tht fires on the inbetween

    # Request Body(req.body)

    # UUID - Creates unique IDs
            - npm install uuid
    
# Express Router - Enables to modularize our routes in express

# Modular file organization

# URL Parameters

    # Parts of a URL
        * Base - http://amazon.com
        * Endpoint - http://amazon.com/images
        * Parameters - http://amazon.com/images/85985o239
        * Query

    #Parameters (req.params) - GET One

#URL Queries

    # Query string - (typically to filter results)
        * Begins with the "?"
        * Built of key=value pairs
        * Multiple queries separated by the "&"

# Middleware

    # What is it?
        * app.use()
            1. (optional) - Mount Path ( endpoint )
            2. Callback function - receives the request, response objects, also the 'next' function
    # The "next" function
        * Moves on to the middleware in line on our server

# Console Errors in Express

    # Use a logger
        * npm install morgan
        * import morgan in server.js
            const morgan = require('morgan')
        * app.use(morgan('dev'))

# Connecting the Front-end to the Back-end

    # Folder Structure
    # Proxy

# Status Codes

    # 200 - Successful Request
    # 201 - Successful Insert / Successful update
    # 401 - Unauthorized
    # 404 - Not found
    # 500 - Server Error

    # https://http.cat