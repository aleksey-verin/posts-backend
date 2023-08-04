import { Router } from 'express'
import PostController from './PostController.js'

const router = Router()

router.post('/posts', PostController.create) // create
router.get('/posts', PostController.getAll) // get all
router.get('/posts/:id', PostController.getOne) // get one
router.put('/posts/', PostController.update) // change one
router.delete('/posts/:id', PostController.delete) // delete one

export default router
