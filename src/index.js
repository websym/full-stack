import express from 'express'

const app = express()
const PORT=process.env.PORT || 3000
app.get('/', (req, res) => {
    res.send("The Server is ready")
})

app.listen(PORT, (req, res) =>{
    console.log(`listening on http://localhost${PORT}`)
})