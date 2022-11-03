const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()

app.use(express.json())

















const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server listening on ${port}`))
