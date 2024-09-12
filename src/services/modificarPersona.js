import { connectDb, disconnectDb } from "../models/context.js"
import personaModel from "../models/personaSchema.js"

const modificarPersona = async (nBuscar,nombre, apellido) => {
  try {
    await connectDb()
    const personaModificada = await personaModel.findOneAndUpdate(
      {nombre: nBuscar},
      {
        nombre,
        apellido
      },
      {
        new: true
      }
    ).exec()
    await disconnectDb()
    return personaModificada
  } catch (error) {
    console.log(error)
  }
}

export default modificarPersona
