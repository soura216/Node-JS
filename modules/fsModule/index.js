const fs = require('fs')

module.exports = class FSModule{

    constructor(req,res){
        this.req = req;
        this.res = res;
    }

    operation(){
        const fileName = 'dummy.txt';
        const txt = "By fs.open() method u can open the file for writing but u have to pass 'w' flag as parameter of this function otherwise it will only create the empty file";
        
        fs.open(rootDirectory+'/modules/fsModule/assets/'+fileName,'w',(error,file)=>{
            if(error) this.res.end(JSON.stringify(error));
            fs.writeFile(file,txt,()=>{
                fs.readFile(rootDirectory+'/modules/fsModule/assets/'+fileName,(err,data)=>{
                    if(err) this.res.end(JSON.stringify(err));
                    else this.res.end(data.toString());
                })
            })
        })
    }
}