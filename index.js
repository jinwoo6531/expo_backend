const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  rs.send('hello');
});

app.listen(PORT, () => {
  console.log('server running' + PORT);
});
