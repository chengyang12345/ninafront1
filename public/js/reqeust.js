import axios from 'axios';
export const request = async (url,params)=>{
    return new Promise((resolve,reject)=>{
        axios({
            method: 'post',
            url: url,
            data: params
          })
          .then((res) => {
            // debugger
            //登录过期跳转登录
            resolve( res.data );
          })
          .catch((error) => {
            reject( error );
          });
    })
}