import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/test', (req, res) => {
    res.send({data: "No cors issues."})
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("Listenin on port:", PORT)
})