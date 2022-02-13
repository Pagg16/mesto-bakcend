const allowedCors = [
  'http://PashokiFront.nomoredomains.work/',
  'https://PashokiFront.nomoredomains.work/',
  'http://pashokifront.nomoredomains.work/',
  'https://pashokifront.nomoredomains.work/',
  'http://pashokifront.nomoredomains.work',
  'https://pashokifront.nomoredomains.work',
  'http://PashokiFront.nomoredomains.work',
  'https://PashokiFront.nomoredomains.work',
  'http://localhost:3000',
  'https://localhost:3000',
];

module.exports = function cors(req, res, next) {
  console.log('1');
  const { origin } = req.headers;
  if (allowedCors.includes(origin)) {
    res.send('корсы раотают');
    res.header('Access-Control-Allow-Origin', origin);
    console.log('1');
    return res.end();
  }
  const { method } = req;
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
  const requestHeaders = req.headers['access-control-request-headers'];

  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    console.log('1');
    return res.end();
  }
  return next();
};

// const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,POST,PUT,PATCH,DELETE';

// module.exports = (req, res, next) => {
//   const { origin } = req.headers;
//   const { method } = req;
//   const requestHeaders = req.headers['access-control-request-headers'];

//   if (allowedCors.includes(origin)) {
//     res.header('Access-Control-Allow-Origin', origin);
//     res.header('Access-Control-Allow-Credentials', true);
//   }

//   if (method === 'OPTIONS') {
//     res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
//     res.header('Access-Control-Allow-Headers', requestHeaders);

//     return res.end();
//   }

//   return next();
// };
