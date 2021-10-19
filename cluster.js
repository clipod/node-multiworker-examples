const cluster = require('cluster');

if(cluster.isWorker){
    console.log('I am a worker');
    for (let index = 0; index < 100000000000; index++) {
    }
    console.log('work finished successfully');
}else{
    console.log('I am a master');
    for (let index = 0; index < 6; index++) {
        cluster.fork();    
        
    }
}