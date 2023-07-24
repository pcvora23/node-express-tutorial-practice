const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
})
app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product
    return { id, name, image }
  })

  res.json(newProducts)
})
app.get('/api/products/:productID', (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find((item) => item.id === parseInt(productID));
  if (!singleProduct) {
    res.status(400).send('Product not found')
  }
  return res.json(singleProduct)
})

app.get('/api/v1/query', (req, res) => {
  const { search, limit } = req.query
  let sortedProducts = [...products]
  if (search) {
    sortedProducts = sortedProducts.filter((item) => item.name.startsWith(search))
  } if (limit) {
    sortedProducts = sortedProducts.splice(0, Number(limit))
  }
  return res.json(sortedProducts)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
}) 