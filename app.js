import express from 'express'
import { createPersona } from './src/services/createPersona.js'
import listarPersona from './src/services/listarPersona.js'
import modificarPersona from './src/services/modificarPersona.js'
import eliminarPersona from './src/services/eliminarPersona.js'

const api = express()

api.use(express.json())

api.get('/', 
  async (request, response)=> {
    const personas = await listarPersona()
    return response.json(personas)
  }
)

api.post('/', 
  async (request, response) => {
    const datos = request.body
    const { nombre, apellido } = datos

    await createPersona(nombre, apellido)

    response.json('Persona creada...')
  }
)

api.put('/:nBuscar', 
  async (request, response) => {
    const nBuscar = String(request.params.nBuscar)

    const datos = request.body
    const { nombre, apellido } = datos
    
    const personaModificada = await modificarPersona(nBuscar, nombre, apellido)

    response.json(personaModificada)
  }
)

api.delete('/:nBuscar', 
  async (request, response) => {
    const nBuscar = String(request.params.nBuscar)
    
    const personaEliminada = await eliminarPersona(nBuscar)

    response.json(personaEliminada)
  }
)

api.listen(3000, ()=> {
  console.log('Api en: http://localhost:3000')
})