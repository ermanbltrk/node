const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  if (req.url === '/') {
    res.write('<h2>index sayfasına hoşgeldiniz</h2>');
  } else if (req.url === '/hakkimda') {
    res.write('<h2>hakkimda sayfasına hoşgeldiniz</h2>');
  } else if (req.url === '/iletisim') {
    res.write('<h2>iletisim sayfasına hoşgeldiniz</h2>');
  } else {
    res.write('<h2>404 - sayfa bulunamadı</h2>');
  }
  res.end();
});

server.listen(5000, () => {
  console.log('Sunucu çalışıyor...');
});
