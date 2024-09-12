import { connectDb, disconnectDb } from "../models/context.js"
import personaModel from "../models/personaSchema.js"

const eliminarPersona = async (nBuscar) => {
  try {
    await connectDb()
    const personaEliminada = await personaModel.findOneAndDelete({nombre: nBuscar}).exec()
    await disconnectDb()
    return personaEliminada
  } catch (error) {
    console.log(error)
  }
}

export default eliminarPersona