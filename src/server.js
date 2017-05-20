const express = require('express');
const next = require('next');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const dir = 'src';
const app = next({ dev, dir });
const routes = require('./routes');

const handler = routes.getRequestHandler(app);
const port = process.env.PORT || 3000;

app.prepare()
.then(() => {
  const server = express();

  server.get('/manifest.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(fs.readFileSync('./manifest.json', 'utf8'));
  });

  server.get('/OneSignalSDKUpdaterWorker.js', (req, res) => {
    res.setHeader('Content-Type', 'text/javascript');
    res.send(fs.readFileSync('./OneSignalSDKUpdaterWorker.js', 'utf8'));
  });

  server.get('/OneSignalSDKWorker.js', (req, res) => {
    res.setHeader('Content-Type', 'text/javascript');
    res.send(fs.readFileSync('./OneSignalSDKWorker.js', 'utf8'));
  });

  server
    .use(handler)
    .listen(port);
});
