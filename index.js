const express = require('express')
const app = express()
app.use(express.static('static'))
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send(tr10)
})
app.listen(process.env.PORT || 3000)
