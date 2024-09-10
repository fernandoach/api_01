import mongoose from "mongoose";

const personaSchema = new mongoose.Schema({
  nombre: { 
    type: String,
    required: true
  },

  apellido: {
    type: String,
    required: true
  }
})

const personaModel = mongoose.model.Persona || mongoose.model('Persona', personaSchema)

export default personaModel