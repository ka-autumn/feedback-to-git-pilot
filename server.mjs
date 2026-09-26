import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';

const files = new Map([
  ['/', ['index.html', 'text/html; charset=utf-8']],
  ['/src/remaining-attempts.js', ['src/remaining-attempts.js', 'text/javascript; charset=utf-8']],
]);
createServer(async (request, response) => {
  const file = files.get(request.url);
  if (request.method !== 'GET' || !file) { response.writeHead(404); response.end(); return; }
  try {
    const body = await readFile(new URL(file[0], import.meta.url));
    response.writeHead(200, { 'Content-Type': file[1], 'Cache-Control': 'no-store' }); response.end(body);
  } catch { response.writeHead(500); response.end('Unable to load pilot app'); }
}).listen(3100, '127.0.0.1', () => console.log('Pilot app: http://127.0.0.1:3100'));
