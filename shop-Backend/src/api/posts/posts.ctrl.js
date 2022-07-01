//const posts = require(".");

let postId =1;

const posts = [
    {
        id :1,
        title: '제목',
        body: '내용',
    },
];

//포스트 작성
// POST /API/posts
// {
//     title,body
// }

export const write = ctx =>{
    const {title, body } = ctx.request.body;
    postId +=1;
    const post ={id: postId, title, body};
    posts.push(post);
    ctx.body=post;
};

// 포스트 목록조회
// GET /api/posts

export const list = ctx =>{
    ctx.body = posts;
};

// 특정 포스트 조회
// GET /api/posts/:id

export const read = ctx =>{
    const{id} = ctx.params;
    //주어딘 id 로 포스트 찾기 
    //파라미터로 받아온 값은 문자열 형식이므로 파라미터를 숫자로 변환 
    //비교할 p.id 값을 문자열로 변환해야함

    const post=posts.find(p => p.id.toString() === id);

    //포스트가 없으면 오류를 반환
    if(!post){
        ctx.status =404;
        ctx.body={
            message: '포스트가 존재하지 않습니다',
        };
        return;
    }
    ctx.body=post;
};

// 특정 포스트 제거
// DELETE /api/posts/:id
export const remove =ctx=>{
    const {id} = ctx.params;
    //해당 id를 가진 posts가  몇번째인지 확인 
    const index =posts.findIndex(p =>p.id.toString() === id);
    //포스트가 없으면 오류를 반환 
    
    if(index===-1){
        ctx.status=404;
        ctx.body = {
            message: '포스트가 존재하지않습니다',
        };
        return;
    }
    //index번째 아이템 제거 
    posts.splice(index,1);
    ctx.status=204 // nocontent
};

// 포스트 수정(교체)
// PUT /api/posts/:id
// {
//     title, body
// }

export const replace = ctx =>{
    // put 메서드는 전체 포스트 정보를 입력하여 데이터를 통째로 교체할때 사용
    const {id} =ctx.params;
    //해당 id를 가진 post가 몇번째 인지 확인 한다 
    const index =posts.findIndex(p=>p.id.toString() ===id);
    //포스트가 없으면 오류를 반환 
    if(index===-1){
        ctx.status =404;
        ctx.body ={
            message:'포스트가 존재하지않습니다',

        };
        return;
    }

    //전체 객체를 덮어 싀웁니다 
    //따라서 id를 제외한 기존 정보를 날리고 객체를 새로 만듭니다
    posts[index] ={
        id,
        ...ctx.request.body,

    };
    ctx.body = posts[index];
};

/*포스트 수정 (특정 필드 변경)
PATCH /api/posts/:id 
{title, body}
*/

export const update= ctx => {
    //PATCH메서드는 주어진 필드만 교체
    const {id} =ctx.params;
    //해당 id를 가진 post 가 몇번째인지 반환 
    const index = posts.findIndex(p => p.id.toString()===id);

    if(index ===-1){
        ctx.status=404;
        ctx.body ={
            message:'포스트가 존재하지 않습니다 ',
        };
        return;
    }
    // 기존값에 정보를 덮어 씌웁니다 
    posts[index]={
        ...posts[index],
        ...ctx.request.body,
    };
    ctx.body = posts[index]
};
