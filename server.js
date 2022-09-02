const express = require('express');
const fs = require('fs');
const notes = require('./Develop/db/db.json');
const path = require('path');
const uuid = require('uuid');
const { DH_CHECK_P_NOT_SAFE_PRIME } = require('constants');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

// Setting routes for APIs
// Notes get saved and joins them in db.json
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/Develop/db/db.json'));
});