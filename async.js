const axios = require('axios');

const url = "http://localhost:3000";

const getData = async (url, name) => {
    try {
        console.log(`Inside ${name} thread`);
        const response = await axios.get(url);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};

const trigger = async () => {
    const startTime = Date.now();
    const [a, b, c] = await Promise.all([getData(url, 'First'), getData(url, 'Second'), getData(url, 'Third')]);
    const endTime = Date.now();
    console.log(`Time take for the async execution: ${endTime - startTime}`);
}


trigger();

