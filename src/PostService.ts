import Post, { IPost, IPostMongo } from './Post.js'
import FileService from './FileService.js'
import { UploadedFile } from 'express-fileupload'

class PostService {
  async create(post: IPost, picture: UploadedFile | UploadedFile[] | undefined) {
    if (picture) {
      const fileName = FileService.saveFile(picture)
      const createdPost = await Post.create({ ...post, picture: fileName })
      return createdPost
    } else {
      const createdPost = await Post.create(post)
      return createdPost
    }
  }
  async getAll() {
    const posts = await Post.find()
    return posts
  }
  async getOne(id: string) {
    if (!id) {
      throw new Error('The id is not specified')
    }
    const post = await Post.findById(id)
    return post
  }
  async update(post: IPostMongo) {
    if (!post._id) {
      throw new Error('The id is not specified')
    }
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true })
    return updatedPost
  }
  async delete(id: string) {
    if (!id) {
      throw new Error('The id is not specified')
    }
    const post = await Post.findByIdAndDelete(id)
    return post
  }
}

export default new PostService()
