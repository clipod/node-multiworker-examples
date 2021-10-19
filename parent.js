const { Worker } = require('worker_threads')

function runService(workerData) {
    return new Promise((resolve, reject) => {
        const worker = new Worker(
            './worker.js', { workerData });
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code) => {
            if (code !== 0)
                reject(new Error(
                    `Stopped the Worker Thread with the exit code: ${code}`));
        })
    })
}

async function run() {
    const result = await runService('Testing data')
    console.log(result);
}

const trigger = async () => {
    const startTime = Date.now();
    const [a, b, c] = await Promise.all([run(), run(), run(),run(), run(), run()]);
    const endTime = Date.now();
    console.log(`Time take for the async execution: ${endTime - startTime}`);
}


trigger();
