# Image processing API
## Description

simple Node.JS API to check images if exist, resize them and save them in a new file.
through provide image parameters like image image name , width and height in link, the API resize the image and save it on a file with a name contains these parameters.

## endpoint

- the app running at port 3000 on localhost
- to open the main page , http://localhost:3000/
- to resize the image, provide query parameters:filename,width and height
  example: http://localhost:3000/images?filename=fjord&height=100&width=80


## execute and test the app

- to run the app
 > npm run start
- to test the app through Jasmine and Supertest
> npm run test
- to run prettier
> npm run prettier
- to run lint
> npm run lint
