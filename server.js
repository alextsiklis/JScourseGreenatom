const http = require('node:http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/plain');
    
    console.log('Url: ' + request.url);
    console.log('Тип запроса: ' + request.method);
    console.log('User-Agent: ' + request.headers['user-agent']);
    console.log('Все заголовки');
    console.log(request.headers);

    if (request.url === '/home' || request.url === '/') {
        response.statusCode = 200;
        response.write('Hello world!\n');
    } else {
        response.statusCode = 404;
        response.write('Not found\n');
    }
    response.end('This is my first NodeJS website!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});