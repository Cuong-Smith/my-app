


const http = require('http');
const port = 3000;
const host = '127.0.0.1';
const server = http.createServer((req, res) => {
    res.end('fullname: Hoang Tuan Cuong\nclass: 17D08\nSchool: FPT university\nDesctiption: friendly, kind');
});

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
});

