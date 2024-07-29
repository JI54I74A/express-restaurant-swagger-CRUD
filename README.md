# express-restaurant-swagger-CRUD
This is a Express Restaurant app, generating and documenting API using Swagger for all the CRUD operations.
Swagger Specification/OpenAPI Specification is an API description format for REST APIs. An OpenAPI file allows you to describe your entire API, including:</br>

- Available endpoints and operations on each endpoint (GET /restaurants, POST /restaurant)</br>
- Operation parameters Input and output for each operation</br>
- Authentication methods</br>
- Contact information, license, terms of use and other information.</br>
  to read more about swagger https://swagger.io/docs/specification/about/
# How to Run
In this excersise first you need to install 'node_modules' folder</br>
`npm init`</br>
 then add libraries for **swagger**</br>
 `npm install swagger-jsdoc swagger-ui-express express nodemon`</br>
 To run the code</br>
 `nodemon index.js`
# Roadmap
Create,read,update,delete operations are doing using http GET,POST,DELETE & PUT </br>
Using specific API paths you can GET all restaurants data, GET a single restaurant by ID, POST a new restaurant, DELETE a restaurant by ID and PUT to update a restaurant by ID</br>
**swagger** specifications are writing separatly in a file - **swagger.json** </br>
To learn more about writing swagger specifications, please follow this link [Swagger Editor](https://editor.swagger.io/)</br>
The Swagger documentation for project has created in http://localhost:4000/api-docs(given path for swagger) , where you can see all the GET,POST,DELETE & PUT tabs</br>
There is a button for 'Try It Out' and and we can execute the API and see the responses. </br>
**swagger** is a very helpful tool for designing, building, documenting, and consuming RESTful web services
# License
MIT License

Copyright (c) 2020 John Williams

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

