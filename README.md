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
Five operations can do using this code in Qraphql Playground</br>
**READ - single**</br>
restaurant: This gets a single restaurant based on a provided ID.</br>
Qraphql Playground Query</br>
```
query findrestaurants($iid:Int=1){
  restaurant(id: $iid) {
    name
    description
    dishes{
      name
      price
    }
  }
}
```

# License
MIT License

Copyright (c) 2020 John Williams

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

