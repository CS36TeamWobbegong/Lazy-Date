const express = require('./node_modules/express')
// const path = require('path')

const app = express()

const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.listen(PORT, () => console.log(`now connected to port ${PORT}`))

module.exports = app



