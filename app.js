import { __dirname } from './utils.js';
import 'dotenv/config.js';
import './config/database.js';
import cors from 'cors';
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index.js';
import mongoose from 'mongoose';
import chaptersRouter from './routes/chapters.js'; 
import errorHandler from './middlewares/error_handler.js';
import notFoundHandler from './middlewares/not_found_handler.js';
import passport from './middlewares/passport.js';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use(function (req, res, next) {
  next(createError(404));
});
app.use(errorHandler)
app.use(notFoundHandler)
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});



export default app;
