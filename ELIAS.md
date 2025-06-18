npm init -y
npm init is a command that initializes a new Node.js project by creating a package.json file — the metadata file that defines your project’s dependencies, scripts, version, author, and more. (-y) skip all the prompts and uses the default values

npm install express mongoose dotenv
express: minimalist and fast web framework for Node.js. Create HTTP APIs (GET, POST, etc.). Handle routes, middleware, and requests/responses.
mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js. Lets you define schemas and models. Makes working with MongoDB easier. Adds validation, queries, middleware, etc.
dotenv: A zero-dependency module that loads environment variables from a .env file into process.env. Keeps secrets/configs out of your codebase. Common for storing database URLs, API keys, etc.

npm i nodemon -D
nodemon: automatically restarts your Node.js server whenever you change a file — no need to manually stop and restart the server every time.
Why Use -D (--save-dev)?
You're telling npm:
"Only install this package for development, not production."
