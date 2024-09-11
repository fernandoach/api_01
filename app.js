import express from 'express'
import { createPersona } from './src/services/createPersona.js'
import listarPersona from './src/services/listarPersona.js'

const api = express()

api.use(express.json())

api.get('/', 
  async (request, response)=> {
    const personas = await listarPersona()
    return response.json(personas)
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