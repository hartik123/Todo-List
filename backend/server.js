const express = require('express')
const app = express()
const port = process.env.PORT || 5000
require('dotenv').config()
const connectDB=require('./config/db');
app.use(express.json())

const taskRoutes=require('./routes/taskRoutes')
connectDB();

app.use('/task',taskRoutes);
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Todo app listening at http://localhost:${port}`)
})