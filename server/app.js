import express from 'express'
import routes from './routes/post-routes.js'

const app = express()
//middlewares
app.use(express.json())
//routes
app.use(routes)

export default app