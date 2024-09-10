import express from 'express'
import { createPersona } from './src/services/createPersona.js'

const api = express()

api.use(express.json())

api.get('/', 
  (request, response)=> {
    response.json('Api Personas')
  }
)

api.post('/', 
  (request, response) => {
    const datos = request.body
    const { nombre, apellido } = datos

    createPersona(nombre, apellido)

    response.json('Persona creada...')
  }
)

api.listen(3000, ()=> {
  console.log('Api en: http://localhost:3000')
})