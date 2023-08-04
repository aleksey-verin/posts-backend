import Post, { IPost, IPostMongo } from './Post.js'

class PostService {
  async create(post: IPost) {
    const createdPost = await Post.create(post)
    return createdPost
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
