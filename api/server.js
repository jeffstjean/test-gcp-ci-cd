const express = require('express');
const port = 5000
const env = process.env.NODE_ENV || 'development'

const app = express();

// routes
app.get('/', (req, res, next) => { res.send('hello') });

app.listen(port, () => {
  console.log(`Server started on port ${port} in mode ${env}`);
});
