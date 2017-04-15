const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const dir = 'src';
const app = next({ dev, dir });
const routes = require('./routes');

const handler = routes.getRequestHandler(app);

app.prepare()
.then(() => {
  express().use(handler).listen(3000);
});
