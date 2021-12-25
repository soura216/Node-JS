const events =  require('events');

module.exports = class EventModule {

    instaceOfEventEmitter = new events.EventEmitter();

    constructor(req,res){
        this.req = req;
        this.res = res;
        /** Assign the event handler to an event*/
        this.instaceOfEventEmitter.on("msgData",(data)=>{
            this.res.end(data.msg.toString());
        })
        
    }

    operation(){
        this.instaceOfEventEmitter.emit('msgData',{msg:"Node.JS Tutorial"});
    }
}