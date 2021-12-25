const fs = require('fs');

module.exports = class ReadableStream {

    constructor(req,res){
        this.req = req;
        this.res = res;
    }

    readOperation(){
        const readableStream = fs.createReadStream(rootDirectory+'/README.md');
        readableStream.on("data",(chunk)=>{
            this.res.write(chunk)
        })
        readableStream.on("end",()=>{
            this.res.end();
        })
        readableStream.on("error",(error)=>{
            this.res.end(`${error.path} path does't exist`)
        })
    }
}