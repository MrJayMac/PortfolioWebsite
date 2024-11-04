const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const pool = require('./db')


app.post('/signup', async (req, res) => {
  const {username, password} = req.body
})



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
