import express from 'express';
import favicon from 'serve-favicon';
import { viewDir, publicDir, faviconPath } from './config';
import router from './router';

const port = process.env.PORT || 3000;
const app = express();

app.set('views', viewDir);
app.set('view engine', 'pug');

app.use(favicon(faviconPath));
app.use(express.static(publicDir));
app.use('/', router);
app.use(errorHandler);

app.listen(port, onListen);

function errorHandler(err, req, res, next) {
  res.status(500).send(err.message);
}

function onListen() {
  console.info('⚡  Listening on ' + port);
}
