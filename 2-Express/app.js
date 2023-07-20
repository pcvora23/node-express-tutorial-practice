const express = require('express')

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Home Page')
})
app.get('/about', (req, res) => {
  res.status(200).send('About page')
})

app.all('*',(req,res)=>{
  res.status(404).send('<h2>Resource not found</h2>')
})

app.listen(5000, () => [
  console.log(`server is listening on port 5000...`)
])
