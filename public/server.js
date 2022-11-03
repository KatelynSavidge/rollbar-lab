const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()

app.use(express.json())

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
})
rollbar.log('Hello world!')

try {
    nonExistentFunction();
  } catch (error) {
    console.error(error);
    
  }
  





const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server listening on ${port}`))
