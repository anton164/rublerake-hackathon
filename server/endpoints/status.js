const express = require('express');
const Router = express.Router();
const monitor = require('express-status-monitor');

Router.use(monitor());



module.exports = Router;
