const express = require('express')
const port = 3000

const app= express()

app.get('/users', (request, response) =>{
  return response.send('Hello Express')
})

app.listen(port, () =>{
  console.log(`🚀 Server started on port ${port}`)
})


