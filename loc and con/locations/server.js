const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const routers = require('./routes/locationRouter.js')
app.use('/locations', routers)

const consultantrouter = require('./routes/consultantRouter.js')
app.use('/consultants', consultantrouter)

app.get('/', (req, res) => {
    res.send('Locations of Kite Mutual offices')
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})