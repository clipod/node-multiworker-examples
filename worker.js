const { workerData, parentPort } = require('worker_threads')
// const sleep = require('sleep');
for (let index = 0; index < 100000000000; index++) {
}

// sleep.sleep(3);
console.log('Work finished successfully');
parentPort.postMessage({ fileName: workerData, status: 'Done' })