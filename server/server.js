const express = require('express');

app.use(express.json());

// Static files
app.use('/styles.css', path.resolve(__dirname, '..', 'client/styles/styles.css'))