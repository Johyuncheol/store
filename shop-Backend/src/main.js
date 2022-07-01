// const koa =require('koa');
// const Router =require('koa-router');
// const bodyParser = require('koa-bodyparser');
import koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import api from './api';

require('dotenv').config();

const {PORT, MONGO_URI}=process.env;

const app =new koa();
const router =new Router();
const api= require('./api');

router.use('/api',api.routes());

app.use(bodyParser());

// router.get('/',ctx =>{
//     ctx.body ="홈";
// });

// router.get('/about/:name?',ctx => {
//     const {name}= ctx.params;
//     ctx.body =name ? `${name}의 소개` : '소개';
// });

// router.get('/posts',ctx => {
//     const {id}= ctx.query;
//     ctx.body =id ? `포스트 #${id}` : '포스트 아이디가 없음';
// });

app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(port, () => {
    console.log('Listening to port %d',port);
});