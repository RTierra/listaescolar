import { Router } from "express";
import { getPost, createPostList, deletePostList, getPostListCliente, createPostListCliente, deletePostListCliente  } from "../controllers/post.controllers.js";
const router = Router()

router.get('/posts', getPost)
//router.post('/posts', createPost)

router.post('/postslista', createPostList)
router.delete('/postslista', deletePostList)

router.get('/postslistasclientes', getPostListCliente)
router.post('/postslistasclientes', createPostListCliente)
router.delete('/postslistasclientes/:id', deletePostListCliente)


export default router