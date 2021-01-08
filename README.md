# Node JS Image Processing API

The completed project can act both as an image placeholder service allowing for images to be used in multiple places with the size adjusted via url parameters or as a processing api that creates thumbnails when an endpoint is reached and displays the stored version if the thumbnail already exists on the server.

The project proves the student's ability to set up a Node.JS project, create a server, use TypeScript, Eslint, Prettier, and Jest to write maintainable, clean code, and use an endpoint to process data for a simple image processing API. 

## Getting started

run npm install to install node modules
```
npm install
```
The following scripts become available
```
npm run start // to start the server
npm run build // to compile TypeScript for production
npm run test // to run unit tests
npm run lint // to run eslint
npm run prettier // to run prettier
```

It is expected that lint, and prettier should result in no errors, and all tests should pass.

Both the TS src and JS production endpoints should be tested. If the endpoint works, you will see a thumbnail image display in the browser and a new file should have been created under assets/thumb. Refresh the browser is only creating a new thumb the first time the endpoint is accessed.

To test TS endpoint, remove any files already in the assets/thumb folder then run:
```
npm run start
```
Next. visit: http://localhost:5000/api/images?filename=argentina&width=200&height=200


To test JS endpoint, remove any files already in the assets/thumb folder then run:
```
node server/index.js
```
Next. visit: http://localhost:5000/api/images?filename=argentina&width=200&height=200


### Dependencies

```
"devDependencies": {
    "@types/express": "^4.17.8",
    "@types/fs-extra": "^9.0.3",
    "@types/sharp": "^0.26.0",
    "@types/jest": "^26.0.15",
    "@types/node": "^14.14.6",
    "@types/supertest": "^2.0.10",
    "@typescript-eslint/eslint-plugin": "^4.6.1",
    "@typescript-eslint/parser": "^4.6.1",
    "eslint": "^7.12.1",
    "eslint-config-prettier": "^6.15.0",
    "eslint-plugin-prettier": "^3.1.4",
    "jest": "^26.6.2",
    "nodemon": "^2.0.6",
    "prettier": "^2.1.2",
    "supertest": "^6.0.1",
    "ts-jest": "^26.4.3",
    "ts-node": "^9.0.0",
    "typescript": "^4.0.5"
  },
  "dependencies": {
    "express": "^4.17.1",
    "sharp": "^0.26.2"
  }
```

## Project Instructions

1. Setup NodeJS, TypeScript, Express, Jest - Ensure that NodeJS, TypeScript, and Jest are set up. Add ExpressJS to our project and create a main file that initializes and configures Express. Use TypeScript syntax for all src code.
2. Create API Endpoint - Create an API endpoint that users are able to hit that triggers the execute of our functionality.
3. Apply Middleware - Apply middleware to apply best practices for POST/PUT/OPTIONS requests, logging, and monitoring.
4. Import image processing library - Import and add an image processing to our application's dependencies
5. Configure API endpoint - Create functionality that takes incoming requests and applies image processing to return a modified image.
6. Unit testing - Use Jest and supertest to test endpoints and any other functions for debugging. 
7. Add caching - Add caching to our application so that repeat requests use pre-stored content rather than regenerating content each time.

## Built With

* [Item1](www.item1.com) - Description of item
* [Item2](www.item2.com) - Description of item
* [Item3](www.item3.com) - Description of item

Include all items used to build project.

## License
[License](../LICENSE.md)
# temp
