const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const pool = require('./db')

app.use(cors());
app.use(express.json());

app.post('/signup', async (req, res) => {
  const {email, password} = req.body

  try{
    const signUp = await pool.query(`INSERT INTO users (email, password) VALUES($1, $2)`)
    res.json({email, password})
  } catch(err){
    console.log(err)
  }
})



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
