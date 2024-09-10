import { connectDb, disconnectDb } from "../models/context.js"
import personaModel from "../models/personaSchema.js"

const createPersona = async (nombre, apellido) => {
  try {
    await connectDb()
    const nuevaPersona = new personaModel({
      nombre,
      apellido
    })
  
    await nuevaPersona.save()
    console.log('Guardado con exito: ', nuevaPersona)
    await disconnectDb()
  } catch (error) {
    console.log(error)
  }
}

export { createPersona }