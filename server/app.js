import express from 'express';
import path from 'path';
import logger from 'morgan';
import restapi from './routes/restapi';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', restapi);

module.exports = app;

