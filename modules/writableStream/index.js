const fs = require('fs');

module.exports = class WritableStream{

    constructor(req,res){
        this.req = req;
        this.res = res;
    }

    writeOperation(){
        const readableStream = fs.createReadStream(rootDirectory+'/README.md');
        const writableStream = fs.createWriteStream(rootDirectory+'/modules/writableStream/storage/dummy.txt');
        readableStream
            .on('error',(error)=>{
                this.res.end(`${error.path} path does't exist`)
            })
            .pipe(writableStream)
            .on('finish',()=>{
                this.res.end("Done!")
            })
    }
}