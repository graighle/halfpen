import express from 'express';
import path from 'path';
import logger from 'morgan';
import config from 'config';
import cors from 'cors';
import restapi from './routes/restapi';

const app = express();

app.set('jwtSecretToken', config.jwtSecretToken);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use('/api', restapi);

module.exports = app;

