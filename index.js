const express = require('express')
const app = express()
app.use(express.static(path.join(__dirname, 'static')));
app.all('/', (req, res) => {
    res.send("Just got a request!")
    res.send(tr10)
})
app.listen(process.env.PORT || 3000)
