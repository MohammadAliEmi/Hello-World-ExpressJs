const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();
const port = process.env.PORT || 3000;

// Set up rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Enable CORS with proper configuration
app.use(cors());

// Use Helmet to set HTTP headers for security
app.use(helmet());

// Create a basic route to display "Hello World"
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start the server on a specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
