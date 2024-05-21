const express = require('express');
const bodyParser = require('body-parser');
const { initDB } = require('./models');
const itemRoutes = require('./routes/item');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/items', itemRoutes);

// Initialize Database and Start Server
initDB().then(() => {
    app.listen(port, () => {
        console.log(`CRUD API listening at http://localhost:${port}`);
    });
});
