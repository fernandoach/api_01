import { connectDb, disconnectDb } from "../models/context.js"
import personaModel from "../models/personaSchema.js"

const listarPersona = async () => {
  try {
    await connectDb()
    const personas = await personaModel.find({}).exec()
    await disconnectDb()
    return personas
  } catch (error) {
    console.log(error)
  }
}

export default listarPersona
