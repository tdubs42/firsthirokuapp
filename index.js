const dotenv = require('dotenv')
  .config()
const express = require('express')
const cors = require('cors')
const path = require('path')

const port = process.env.PORT || 9000
const secret = process.env.SECRET

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'front-end/build')))

app.use('/api/*', (_, res) => {
  res.json({taco: "Tacos, yum"})
})

app.use('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'front-end/build/index.html'))
})

app.listen(port, () => {
  console.log(`Serving running on port ${port}`)
})

console.log('It\'s alive')
console.log(__dirname)
console.log(__filename)
console.log(process.env.USER)
console.log(process.env.PORT)
