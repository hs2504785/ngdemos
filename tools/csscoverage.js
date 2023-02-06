const puppeteer = require('puppeteer');
const util = require('util');
const fs = require('fs');
const distDir = 'dist/ngapp/';
const cssmin = require('cssmin');

function updateHtml(criticalCssStr) {
  fs.readFile(distDir + 'index.html', 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }

    var result = data.replace(/\<\/style>/g, criticalCssStr + '</style>');

    fs.writeFile(distDir + 'index.html', result, 'utf8', function (err) {
      if (err) return console.log(err);
    });
  });
}

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.coverage.startCSSCoverage();
  await page.goto('https://hs2504785.github.io/ngdemos/ngapp/'); // Change this
  const css_coverage = await page.coverage.stopCSSCoverage();
  // console.log(util.inspect(css_coverage, { showHidden: false, depth: null }));
  await browser.close();

  let final_css_bytes = '';
  let final_unused_css_bytes = '';
  let total_bytes = 0;
  let used_bytes = 0;
  let unused_bytes = 0;
  let filename;

  for (const entry of css_coverage) {
    if (!filename && entry.url.includes('.css')) {
      filename = entry.url.split('/').pop();
    }

    // final_css_bytes = '';
    // final_unused_css_bytes = '';
    total_bytes += entry.text.length;

    // Handle unused css
    if (!entry.ranges.length) {
      final_unused_css_bytes += entry.text;
    } else {
      entry.ranges.forEach((current, index) => {
        const next = entry.ranges[index + 1];
        if (next) {
          unused_bytes += next.start - current.end - 1;
          final_unused_css_bytes +=
            entry.text.slice(current.end, next.start) + '\n';
        }

        // Handle used css
        used_bytes += current.end - current.start - 1;
        final_css_bytes += entry.text.slice(current.start, current.end) + '\n';
      });
    }

    // Handle used css
    // for (const range of entry.ranges) {
    //   used_bytes += range.end - range.start - 1;
    //   final_css_bytes += entry.text.slice(range.start, range.end) + '\n';
    // }
  }

  if (filename.includes('.css')) {
    // update critical css
    updateHtml(cssmin(final_css_bytes));
  }

  fs.writeFile(distDir + filename, cssmin(final_unused_css_bytes), error => {
    if (error) {
      console.log('Error creating file unused', error);
    } else {
      console.log('File saved unused');
    }
  });
})();
