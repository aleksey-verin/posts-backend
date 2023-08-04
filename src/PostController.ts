import { Request, Response } from 'express'
import PostService from './PostService.js'

class PostController {
  async create(req: Request, res: Response) {
    try {
      const post = await PostService.create(req.body, req.files?.picture)
      res.json(post)
    } catch (error) {
      res.status(500).json(error)
    }
  }
  async getAll(req: Request, res: Response) {
    try {
      const posts = await PostService.getAll()
      return res.json(posts)
    } catch (error) {
      res.status(500).json(error)
    }
  }
  async getOne(req: Request, res: Response) {
    try {
      const post = await PostService.getOne(req.params.id)
      return res.json(post)
    } catch (error) {
      res.status(500).json(error)
    }
  }
  async update(req: Request, res: Response) {
    try {
      const updatedPost = await PostService.update(req.body)
      res.json(updatedPost)
    } catch (error) {
      res.status(500).json((<Error>error).message)
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const post = await PostService.delete(req.params.id)
      res.json(post)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

export default new PostController()
