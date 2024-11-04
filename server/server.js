const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const pool = require('./db')






app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
