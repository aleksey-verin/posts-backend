import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'

const PORT = 3001
const DB_URL = 'mongodb+srv://verevaa:OCEyb1lQFp6EVCEa@cluster0.ehqjdbc.mongodb.net/?retryWrites=true&w=majority'

const app = express()

app.use(express.json())
app.use('/api', router)
// app.use('/user', otherRouter)

async function startApp() {
  try {
    await mongoose.connect(DB_URL)
    app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
  } catch (e) {
    console.log(e)
  }
}

startApp()
