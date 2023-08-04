import express from 'express'
import mongoose from 'mongoose'
import Post from './Post.js'

const PORT = 3001
const DB_URL = 'mongodb+srv://verevaa:OCEyb1lQFp6EVCEa@cluster0.ehqjdbc.mongodb.net/?retryWrites=true&w=majority'

const app = express()

app.use(express.json())

app.post('/', async (req, res) => {
  const { author, title, content, picture } = req.body
  const post = await Post.create({ author, title, content, picture })
  res.json(post)
})

async function startApp() {
  try {
    await mongoose.connect(DB_URL)
    app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
  } catch (e) {
    console.log(e)
  }
}

startApp()
