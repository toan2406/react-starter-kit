import dotenv from 'dotenv/config';
import express from 'express';
import expressStaticGzip from 'express-static-gzip';
import favicon from 'serve-favicon';
import { viewDir, publicDir, faviconPath } from './config';
import router from './router';

const port = process.env.PORT;
const nodeEnv = process.env.NODE_ENV;
const app = express();

app.set('views', viewDir);
app.set('view engine', 'pug');

app.use(favicon(faviconPath));
app.use(expressStaticGzip(publicDir));
// or config in web server
// app.use(express.static(publicDir));
app.use('/', router);
app.use(errorHandler);

app.listen(port, onListen);

function errorHandler(err, req, res, next) {
  const error = {
    message: err.message,
    stack: nodeEnv === 'development' ? err.stack : null
  };
  res.status(500).render('error', { error });
}

function onListen() {
  console.info('⚡  Listening on ' + port);
}
