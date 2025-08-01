// Create web server
const express = require('express')

// Using const (recommended for Express apps)
const app = express()

//define port number
const PORT = 3000

//create routes for comments API
app.get('/comments', (req, res) => {
  res.send('Comments API')
})

//start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
