'use strict';
const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());
app.use(express.json())

// App
const client = require('prom-client');
const collectDefaultMetrics = client.collectDefaultMetrics;
// Probe every 5th second.
collectDefaultMetrics({ timeout: 5000 });

const counter = new client.Counter({
  name: 'node_dnk_request_operations_total',
  help: 'The total number of processed requests'
});

const orderCounter = new client.Counter({
  name: 'node_dnk_order_operations_total',
  help: 'The total number of orders placed'
});

const histogram = new client.Histogram({
  name: 'node_request_duration_seconds',
  help: 'Histogram for the duration in seconds.',
  buckets: [1, 2, 5, 6, 10]
});

// Create a route to handle GET requests to the root path
app.get('/', (req, res) => {
  //Simulate a sleep
  var start = new Date()
  var simulateTime = 1000

  setTimeout(function(argument) {
    // execution time simulated with setTimeout function
    var end = new Date() - start
    histogram.observe(end / 1000); //convert to seconds
  }, simulateTime)

  counter.inc();
  res.send('Hello, welcome to DNK backend!');
});

app.get('/orders/:orderid',async(req,res)=>{   
  const order=await Order.findById(req.params.orderid); 
  if(!order){
      return res.status(404);
  }else{
      order.productcount-=1;
      await order.save();
  }
});

app.post('/api/placeOrder', (req, res) => {
  const productId = req.body.productId; 
  console.log('Product ID received:', productId);
  orderCounter.inc();
  res.status(200).json({ message: 'Order placed successfully' });
});

// Metrics endpoint
app.get('/metrics', (req, res) => {
  res.set('Content-Type', client.register.contentType)
  res.end(client.register.metrics())
})

// Start the server on port 6000
app.listen(6000, () => {
  console.log('Server is listening on port 6000');
});