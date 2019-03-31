export default {

    formateDate(dateTime) {
        let date = new Date(dateTime);
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    },

    pagination(data,current) {
        return{
            total:data.total,
            pageSize:data.pageSize,
            showTotal:()=>{
                return `共${data.total}条 第${current}页`
            },
            showQuickJumper:true
        }
    },


}