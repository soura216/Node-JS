module.exports = class EventModule {

    events =  require('events');
    instaceOfEventEmitter = new this.events.EventEmitter()
    

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