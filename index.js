/*
  - Query params => meusite.com/users?nome=rodolfo&age=28 // FILTROS
  - Route params => /users/2  // BUSCAR, DELETAR OU ARMAZENAR ALGO ESPECÍFICO
  - Request Body => {"name":"Rodolfo", "age":28}

  - GET          => Buscar informação no back-end
  - POST         => Criar informação no back-end
  - PUT / PATCH  => Alterar/Atualizar informação no back-end
  - DELETE       => Deletar informação no back-end
*/
const express = require('express')
const uuid = require('uuid')

const port = 3000
const app= express()
app.use(express.json())

const users = []

app.get('/users', (request, response) =>{
    return response.json(users)
})

app.post('/users', (request, response) =>{
  const { name, age } = request.body

  const user = { id:uuid.v4(), name, age }

  users.push(user)

  return response.status(201).json(user)
})










app.listen(port, () =>{
  console.log(`🚀 Server started on port ${port}`)
})


