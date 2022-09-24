const express = require("express")
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use('/', require('./routes/router'))

app.listen(3000, () => {
  console.log("Servidor ejecutandose")
})
