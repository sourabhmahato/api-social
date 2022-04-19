const express = require('express')
const app = express()
const format = require('date-format')
const PORT = 4000 || process.env.PORT

app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})
app.get('/api/v1/instagram', (req, res)=>{
    const instasocial = {
        username: "sourabh07",
        followers: 485,
        follows: 800,
        time: format.asString("dd[MM] - hh:mm:ss", new Date()),
    }
    res.status(200).json(instasocial);
})
app.get('/api/v1/facebook', (req, res)=>{
    const instasocial = {
        username: "sourabh-07",
        followers: 985,
        follows: 700,
        time: format.asString("dd[MM] - hh:mm:ss", new Date()),
    }
    res.status(200).json(instasocial);
})
app.get('/api/v1/linkedin', (req, res)=>{
    const instasocial = {
        username: "sourabhmahato",
        followers: 985,
        follows: 700,
        time: format.asString("dd[MM] - hh:mm:ss", new Date()),
    }
    res.status(200).json(instasocial);
})
app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})