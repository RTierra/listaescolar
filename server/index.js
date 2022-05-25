import app from './app.js'
import { connectToDB } from './db.js';



connectToDB()
app.listen(4000)
console.log('server is running on port', 4000)