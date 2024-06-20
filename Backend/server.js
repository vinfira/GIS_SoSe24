const http = require('http');

const hostname = '127.0.0.1'; // localhost
const port = 3000;
let lebensmittel=[{name:"beeren",expiry:"2024-06-22"},{name:"erdbeeren",expiry:"2024-06-24"}]

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.setHeader('Access-Control-Allow-Origin', '*'); // on CORS error
  const url = new URL(request.url || '', `http://${request.headers.host}`);
  switch (url.pathname) {
    case '/':
      response.write('Hello World'); 
      break;
    case '/search':
      response.write('Hier ist was du suchst: ' + url.searchParams.get('item'));
      break;
    case '/inhalt':
        response.write(JSON.stringify(lebensmittel));
        break;
    case '/hinzufuegen':
      if (request.method === 'POST') {
        let jsonString = '';
        request.on('data', (data) => {
          jsonString += data;
        });
        request.on('end', () => {
          console.log(JSON.parse(jsonString));
        });
      }
      break;
  case '/loeschen':
    //lösch funktion erstellen, 
    break;
    default:
      response.statusCode = 404;
  }
  response.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});