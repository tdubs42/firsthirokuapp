const dotenv = require('dotenv')
  .config()
const express = require('express')
const cors = require('cors')

const port = process.env.PORT || 9000
const secret = process.env.SECRET

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/*",(_,res)=>{
  res.json({data: `${secret} says hello`})
})

app.listen(port, () => {
  console.log(`Serving running on port ${port}`)
})

console.log('It\'s alive')
console.log(__dirname)
console.log(__filename)
console.log(process.env.USER)
console.log(process.env.PORT)
