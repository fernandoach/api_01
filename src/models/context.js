import mongoose from 'mongoose'
import dotenv from 'dotenv'
import personaModel from './personaSchema.js'

dotenv.config()

const uri = process.env.MONGO_URI

let state = false

const initializeDb = async () => {
  try {
    if(!mongoose.modelNames().includes('Persona')){
      await personaModel.init()
    }
  } catch (error) {
    console.log(error)
  }
}


const connectDb = async () => {
  try {
    initializeDb()
    if (state === false) {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      state = true
    }
  } catch (error) {
    console.log(error)
  }
}

const disconnectDb = async () => {
  try {
    if(state === true){
      await mongoose.connection.close()
      state = false
    }
  } catch (error) {
    console.log(error)
  }
}

export { connectDb, disconnectDb }