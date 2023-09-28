import express from 'express'
const app = express()
const PORT = 3000


import hotelsRouter from './routes/hotels.js'

app.use('/api/v1/hotels', hotelsRouter )


app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
