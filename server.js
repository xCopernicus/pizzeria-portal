
/* global */
const fs = require('fs');
const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('build/db/app.json');
const middlewares = jsonServer.defaults({
  static: './',
  noCors: true,
});
const port = process.env.PORT || 3131;
const request = require('request');

server.get(/\/panel.*/, (req, res) =>{
  if(req.url === '/panel'){
    req.url += '/';
  }
  const filePath = __dirname + req.url.replace('/panel', '/build');
  if(fs.existsSync(filePath)){
    res.sendFile(filePath);
  } else {
    res.sendFile(path.join(__dirname+'/build/index.html'));
  }
  request(
    { url: 'http://localhost:3131/' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: 'err.message' });
      }

      res.json(JSON.parse(body));
    }
  );
});

server.use(function(req, res, next) {
  const api = /^\/api(.*)$/.exec(req.url);

  if (api && api.length > 1) {
    req.url = api[1] || '/';
  } else {
    req.url = '/build/front' + req.url;
  }
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

server.use(middlewares);
server.use(router);

server.listen(port);
