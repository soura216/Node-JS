const http = require('http');
const server = http.createServer()

server.on('request',(req,res)=>{

    global.rootDirectory =  __dirname;

    if(req.url === '/'){
        const ReadableModule = require('./modules/readableStream/index');
        new ReadableModule(req,res).readOperation()
    } else if(req.url === '/writeable-stream'){
        const WritableStream = require('./modules/writableStream/index');
        new WritableStream(req,res).writeOperation()
    } else if(req.url === '/tranform-stream'){
        const TransformStream = require('./modules/transformStream/index');
        new TransformStream(req,res).transformOperation();
    } else if(req.url === '/zlib-module'){
        const ZlibModule = require('./modules/zlibModule/index');
        new ZlibModule(req,res).compressOperation();
    } else if(req.url === '/event-module'){
        const EventModule = require('./modules/eventModule/index');
        new EventModule(req,res).operation();
    } else if(req.url === '/fs-module'){
        const FSModule = require('./modules/fsModule/index')
        new FSModule(req,res).operation();
    } else {
        const URLModule =  require('./modules/urlModule/index');
        new URLModule(req,res).operation();
        
    }
});

server.listen(8000,()=>{
    console.log("Server is running in 8000 port");
});