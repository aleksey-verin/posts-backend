import mongoose from 'mongoose'

export interface IPost {
  author: string
  title: string
  content: string
  picture?: string
}

export interface IPostMongo extends IPost {
  _id: string
}

const Post = new mongoose.Schema<IPost>({
  author: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  picture: { type: String },
})

export default mongoose.model<IPost>('Post', Post)
