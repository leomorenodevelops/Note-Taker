const express = require('express');
const fs = require('fs');
const notes = require('./Develop/db/db.json');
const path = require('path');
const uuid = require('uuid');
const { DH_CHECK_P_NOT_SAFE_PRIME } = require('constants');

const app = express();
const PORT = process.env.PORT || 3001;