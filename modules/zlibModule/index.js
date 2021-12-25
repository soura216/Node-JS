const fs = require('fs')
const zlib = require('zlib');

module.exports = class ZlibModule{

    listOfImages = ['a.png','b.jpg'];

    constructor(req,res){
        this.req = req;
        this.res = res;
    }

    compressOperation(){
        this.listOfImages.forEach((value,index) => {
            const readStream = fs.createReadStream(rootDirectory+'/modules/zlibModule/images/'+value);
            const writeStream = fs.createWriteStream(rootDirectory+'/modules/zlibModule/'+value+'.gz');
            const compress = zlib.createGzip()
            readStream
                .on('error',(error)=>{
                    this.res.end(`${error.path} path does't exist`)
                })
                .pipe(compress)
                .pipe(writeStream)
                .on('error',(error)=>{
                    console.log(error);
                    this.res.end(`Something went to wrong`)
                })
                .on('finish',()=>{
                    if(index+1 === this.listOfImages.length) this.res.end("Done");
                })
        });
    }
}