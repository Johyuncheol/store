const Router =require('koa-router');
import posts from './posts';

const api = new Router();

// api.get('/test',ctx => {
//     ctx.body = 'test 성공';
// });

api.use('/posts', posts.routes());

// module.exports = api;

export default api;