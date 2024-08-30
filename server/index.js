const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const Product = require('./models/Product');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Sincronizar com o banco de dados
sequelize.sync();

// Endpoints CRUD

// Create
app.post('/products', async (req, res) => {
  const { name, code, description, price } = req.body;
  const product = await Product.create({ name, code, description, price });
  res.json(product);
});

// Read
app.get('/products', async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

// Update
app.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const { name, code, description, price } = req.body;
  await Product.update({ name, code, description, price }, { where: { id } });
  res.json({ success: true });
});

// Delete
app.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  await Product.destroy({ where: { id } });
  res.json({ success: true });
});

// Iniciar o servidor
app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});
