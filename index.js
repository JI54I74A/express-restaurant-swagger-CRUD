const express = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

var restaurants = [{id:0,name:"Woodshill"},{id:1,name:"Fiorellas"}]

const app = express();
app.use(express.json());  //parse json body of request

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// GET all restaurants
app.get('/restaurants', (req,res) => {
    res.send(restaurants);
})
// GET a single restaurant by ID
app.get('/restaurants/:id', (req, res) => {
    const restaurant = restaurants.find(item => item.id === parseInt(req.params.id));
    if (!restaurant) return res.status(404).send('Restaurant not found');
    res.json(restaurant);
  });
// POST a new restaurant
app.post('/restaurant', (req,res) => {
    restaurants.push({id:req.body.id, name:req.body.name})
    res.send(`${JSON.stringify(restaurants)} created`)
})
// DELETE a restaurant by ID
app.delete('/restaurant/:id', (req,res) => {
    console.log('delete:id:'+req.params.id);
    restaurants = restaurants.filter(item => item.id != req.params.id)
    res.send("restaurants left:"+JSON.stringify(restaurants));
})
// PUT to update a restaurant by ID
app.put('/restaurant/:id', (req,res) => {
    const restaurant = restaurants.find((item) => item.id === parseInt(req.params.id));
    if(!restaurant) return res.status(404).send('Restaurant not found');
    restaurants[req.params.id] = ({id:req.body.id, name:req.body.name})
    res.send(`${JSON.stringify(restaurants[req.params.id])} edited`)
})


app.listen(4000, () => {
    console.log('Listening on port 4000')
})