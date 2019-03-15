export default{

    formateDate(dateTime) {
        let date = new Date(dateTime);
        return date.getFullYear() + '-' + date.getMonth()+1 + '-' + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    }
}