const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
// Render the main page
app.get('/', (req, res) => {
  res.render('index');
});

// Handle form submission (authentication example)
app.post('/auth', (req, res) => {
  const { name, email, password } = req.body;
  console.log('Received user data:', { name, email, password });
  res.status(200).json({ message: 'Form submitted successfully!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
