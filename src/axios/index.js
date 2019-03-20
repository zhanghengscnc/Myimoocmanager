import JsonP from 'jsonp';
export default class Axios {

    static jsonp(data) {
        return new Promise((resolve, reject)=>{
           JsonP(data.url,data.options,function (err,resp) {
               if (resp.status == 'success') {
                   resolve(resp);
               }else {
                   reject(resp);
               }
           })
        });
    }

}