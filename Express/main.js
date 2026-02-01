const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// app.get('/about', (req, res) => {
//   res.send('Hello about!')
// })
// app.get('/contact', (req, res) => {
//   res.send('Hello contact!')
// })
// app.get('/help', (req, res) => {
//   res.send('help')
// })
app.get('/blog:slug', (req, res) => {
  res.send('Hello ${req.params.slug} blog!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
