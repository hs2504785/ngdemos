const fs = require('fs');
const distDir = 'dist/ngssr/';

function updateHtml() {
  const baseHref = `<base href="/ngdemos/ngssr/">`;
  fs.readFile(distDir + 'index.html', 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }

    var result = data.replace(/\<base href="\/">/g, baseHref);

    fs.writeFile(distDir + 'index.html', result, 'utf8', function (err) {
      if (err) return console.log(err);
      console.log(`Base href updated in ${distDir}index.html`);
    });
  });
}

updateHtml();
