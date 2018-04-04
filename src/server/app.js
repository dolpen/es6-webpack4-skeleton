import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/index';

// todo service worker 相当のサーバーサイド実装 + SSR

const props = {
  port: 8080
};

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);

app.listen(
    props.port,
    () => console.log('Example app listening on port ' + props.port)
);
