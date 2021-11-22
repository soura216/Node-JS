module.exports = class TansformStream{

    stream = require('stream');

    constructor(req,res){
        this.req = req;
        this.res = res;
        this.instaceOfTransform  = new this.stream.Transform();
        this.instaceOfTransform._transform = function (chunk,encoding,callback) {
            try{
               chunk = chunk.toString().replace(/#/g,"*");
               return callback(null,chunk); 
            }catch(error){
                return callback(error,chunk);
            }
        }
    }

    transformOperation(){
        const fs = require('fs');
        const readableStream = fs.createReadStream(rootDirectory+'/README.md');
        const writableStream = fs.createWriteStream(rootDirectory+'/modules/transformStream/storage/dummy.txt');
        readableStream
            .on('error',(error)=>{
                this.res.end(`${error.path} path does't exist`)
            })
            .pipe(this.instaceOfTransform)
            .on('error',(error)=>{
                this.res.end(JSON.stringify(error))
            })
            .pipe(writableStream)
            .on('finish',()=>{
               this.res.end("Done!")
            })
    }


}