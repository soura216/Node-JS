- Streams
```
Streams are objects that let you read the data from the source or write the data to the destination in a continuous fashion.

Actually, Stream means listening to the music or watching the video in real-time instead of downloading the video on a computer and watching it later.

Types of Stream -
    1.Readable: it's used for read operation
    2.Writeable: it's used for write operation
    3.Duplex: it's used for both read and write operation
    4.Transform: A type of duplex stream in where output is computed base input 
  

Through the Stream, you don't need to wait until complete read the whole file because you will get the data chunk by chunk.

Each type of stream is an instance of EventEmitter and through the several events in different times. Some of the common events are -
    1.data: it's fired in write stream when the data is available to read.
    2.end: it's fired in write stream when no data left to read.
    3.error: it's fired in write and read stream when we get some data during read or write data.
    4.finish: it's fired in read stram when all data has been flushed.
```  

- stream.pipe() 
```  
this method used to take the readable stream and connect it to writeable stream
```  

- Modules
```  
A set of functions you want to include in your application.
```  
