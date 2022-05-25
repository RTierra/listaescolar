import axios from 'axios'
//Productos
export const getPostsRequests = async () => await axios.get('/posts')

//ventas
export const createPostRequestA = async (post) => await axios.post('/postslista', post)

export const deletePostRequestA = async id => await axios.delete('/postslista', + id)

// Lista de utiles
export const getPostRequestB = async () => await axios.get('/postslistasclientes')

export const createPostRequestB = async (post) => await axios.post('/postslistasclientes', post)

export const deletePostRequestB = async id => await axios.delete('/postslistasclientes/' + id)