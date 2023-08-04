import { Request, Response } from 'express'
import Post from './Post.js'

class PostController {
  async create(req: Request, res: Response) {
    try {
      const { author, title, content, picture } = req.body
      const post = await Post.create({ author, title, content, picture })
      res.json(post)
    } catch (error) {
      res.status(500).json(error)
    }
  }
  async getAll(req: Request, res: Response) {
    try {
      const posts = await Post.find()
      return res.json(posts)
    } catch (error) {
      res.status(500).json(error)
    }
  }
  async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params
      if (!id) {
        res.status(400).json({ message: 'the id is not specified' })
      }
      const post = await Post.findById(id)
      return res.json(post)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async update(req: Request, res: Response) {
    try {
      const post = req.body
      if (!post._id) {
        res.status(400).json({ message: 'the id is not specified' })
      }
      const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true })
      res.json(updatedPost)
    } catch (error) {
      res.status(500).json(error)
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params
      if (!id) {
        res.status(400).json({ message: 'the id is not specified' })
      }
      const post = await Post.findByIdAndDelete(id)
      res.json(post)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

export default new PostController()
