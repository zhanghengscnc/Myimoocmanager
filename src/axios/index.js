import JsonP from 'jsonp';
import axios from 'axios';

export default class Axios {

    static jsonp(data) {
        return new Promise((resolve, reject) => {
            JsonP(data.url, data.options, function (err, resp) {
                if (resp.status == 'success') {
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
            let baseUrl = " https://www.easy-mock.com/mock/5c9ef26249b4a96ba1da0441/imook";
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

    }

}