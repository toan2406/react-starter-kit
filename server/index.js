import express from 'express';
import { viewDir, publicDir } from './config';

const port = process.env.PORT || 3000;
const app = express();

app.set('views', viewDir);
app.set('view engine', 'pug');

app.use(express.static(publicDir));

app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', html: '<h1>Hello there!</h1>' });
});

app.listen(port, onListen);

function onListen() {
  console.info('⚡  Listening on ' + port);
}
