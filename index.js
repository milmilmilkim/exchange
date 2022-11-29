import express from 'express';
import cors from 'cors';
import { getExchange } from './utils/exchange.js';

const app = express();

app.use(cors());
app.set('port', process.env.PORT || 3001);
app.use(express.static('uploads')); //정적 파일 폴더

app.get('/', (req, res) => {
  res.json('hello world');
});

app.get('/exchange', async (req, res) => {
  const exchange = await getExchange();
  res.json(exchange);
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
