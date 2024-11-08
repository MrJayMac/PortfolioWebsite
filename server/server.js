const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT ?? 8000;
const pool = require('./db');

app.use(cors());
app.use(express.json());

// Signup route
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  console.log('Received request:', req.body); // Log the incoming request to check if data is being sent properly
  
  try {
    // Make sure to insert values correctly and log the result
    const signUp = await pool.query(
      `INSERT INTO users (email, password) VALUES($1, $2) RETURNING *`,
      [email, password]
    );
    
    // Log successful insertion
    console.log('User added:', signUp.rows[0]);
    
    // Return success response
    res.json({ email, message: 'User created successfully' });
  } catch (err) {
    // Log the error to see what's going wrong
    console.error('Error during signup:', err.message);
    res.status(500).json({ error: 'Server error during signup' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
