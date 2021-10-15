const path = require('path');
const data = require('./api/crystalball.json')

const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 3000

app.get('/', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '/index.html'));

    } catch (err) {
        res.status(500).send({
            message: err.message
        })
    }
});

app.get('/answer', async (req, res) => {
    try {
        res.status(200).json(
            data[Math.round(Math.random() * data.length)]
        )
    } catch (err) {
        res.status(500).json({
            message: err.message
        })

    }
})

app.listen(
    PORT,
    () => console.log(`Server running at port ${PORT}`)
)
