import JsonP from 'jsonp';
import axios from 'axios';
import {message} from 'antd';

export default class Axios {

    static jsonp(data) {
        return new Promise((resolve, reject) => {
            JsonP(data.url, data.options, function (err, resp) {
                if (resp.status && resp.status == 'success') {
                    resolve(resp);
                } else {
                    reject(resp);
                }
            })
        });
    }

    static ajax(options) {
        let loading;
        if (options.data && options.data.isShowLoading !== false) {
            loading = document.getElementById('ajaxLoading');
            loading.style = "display: none;";
        }
        /* if (options.data && options.data.isShowLoading !== false) {
             let loading = document.getElementById("ajaxLoading");
             loading.style.display = 'block';
         }*/
        return new Promise((resolve, reject) => {
            let baseUrl = "https://www.easy-mock.com/mock/5c9ef26249b4a96ba1da0441/imook";
            axios(
                {
                    url: options.url,
                    method: options.method,
                    baseURL: baseUrl,
                    timeout: 5000,
                    params: (options.data && options.params) || ""
                }
            ).then((response) => {

                //请求得到response结果关闭loading
                if (options.data && options.data.isShowLoading !== false) {
                    loading = document.getElementById('ajaxLoading');
                    loading.style.display = 'none';
                }
                if (response.status == 200 && response.data.code == 0 && response.data.tableList) {
                    resolve(response.data);
                } else {
                    reject(response.data);
                }
            })
        });

    };

    static myAjax(Options) {
        return new Promise((resolve, reject) => {
            let baseUrl = "https://www.easy-mock.com/mock/5c9ef26249b4a96ba1da0441/imook";
            axios({
                    baseURL: baseUrl,
                    url: Options.url,
                    method: Options.method,
                    parms: {
                        ...Options.data.params
                    }
                }
            ).then((resp) => {
                if (resp.status == '200') {
                    resolve(resp)
                } else {
                    message.error(resp.status);
                }
            });
        });

    }

    static myAxios(options) {
        let baseUrl = "https://www.easy-mock.com/mock/5c9ef26249b4a96ba1da0441/imook";
        return new Promise((resolve, reject) => {
            axios({
                baseURL: baseUrl,
                url: options.url,
                method: options.method,
                timeout: 5000,
                params: (options.data && options.param) || ""
            }).then((resp) => {
                if (resp.status == 200 && resp.data.tableList) {
                    resolve(resp.data);
                } else {
                    reject(resp)
                }
            })
        });
    }

    static myAxiosCity(options) {
        let baseUrl = "https://www.easy-mock.com/mock/5c9ef26249b4a96ba1da0441/imook";
        return new Promise((resolve, reject) => {
            axios({
                baseURL: baseUrl,
                url: options.url,
                method: options.method,
                timeout: 5000,
                params: (options.data && options.param) || ""
            }).then((resp) => {
                if (resp.status == 200 && resp.data) {
                    resolve(resp);
                } else {
                    reject(resp.status)
                }
            })
        });
    }

    static commonAxios(options) {
        let baseUrl = "https://www.easy-mock.com/mock/5c9ef26249b4a96ba1da0441/imook";
        return new Promise((resolve,reject)=>{
            axios({
                baseURL: baseUrl,
                url: options.url,
                method: options.method ? options.method : "get",
                params: (options.data && options.data.params) || ""
            }).then((resp)=>{
                if (resp.status == 200) {
                    resolve(resp.data)
                } else {
                    message.error(`发送错误：${resp.status}:${resp.statusText}`)
                }
            })
        })


    }

}