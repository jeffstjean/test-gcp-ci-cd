const express = require('express');
const os = require('os');
const port = 5000
const env = process.env.NODE_ENV || 'development'

const app = express();

// routes
app.get('/', (req, res) => {
  res.send(`<h3>It's ${os.hostname()}! Working??</h3>`);
})

app.listen(port, () => {
  console.log(`Server started on port ${port} in mode ${env}`);
});
