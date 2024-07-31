import express from 'express'

const PORT = process.env.PORT || 8080;
const app = express();

app.use('/', (req, res) => {
    res.send({
        message: 'working'
    })
})

app.listen(PORT, () => {
    console.log(`app listening on ${PORT}`)
})