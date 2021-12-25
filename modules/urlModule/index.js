const url = require('url')

module.exports = class URLModule{

    address = "http://localhost:8000/userList?role=client&created_from=22/02/2019&created_to=22/02/2022";

    constructor(req,res){
        this.req - req;
        this.res = res;
    }

    operation(){
        const q = url.parse(this.address);
        this.res.write(`Host ${q.host} |`)
        this.res.write(`Path ${q.path} |`)
        this.res.write(`Search ${q.search} |`)
        this.res.write(JSON.stringify(q.query))
        this.res.end();
    }
}