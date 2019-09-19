'use strict';

const http = require('http');
const handleRequest = function(req, res) {
  res.writeHead(200);
  res.end('My sample nodejs app on Kubernetes/RedHat OpenShift platform');
};
const www = http.createServer(handleRequest);
www.listen(process.env.PORT || 8080);