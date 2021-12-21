const delay = (ms) => new Promise(r => setTimeout(r, ms));

(async () => {
    console.log('run');
    let fs = require("fs");
    let concat = require('concat');
    let { exec } = require('child_process');
    let { render } = require("mustache");

    exec('pug -c -D --name-after-file ./src/templates --out ./build/pugTemplates', (err, stdout, stderr) => {
        if (err) { console.log(err); return; }
        if (stdout) console.log(`stdout: ${stdout}`);
    });

    await delay(1000);
    concat(['src/setDates.js', 'src/auth.js', 'build/pugTemplates/option.js'], 'build/js/built-dates.js')
    concat(['src/deps.js', 'src/auth.js', 'build/pugTemplates/option.js', 'build/pugTemplates/col-header.js'], 'build/js/built-deps.js')

    await delay(1000);
    exec('bookmarklet build/js/built-dates.js > build/bookmarks/dates-bookmark', (err, stdout, stderr) => {
        if (err) { console.log(err); return; }
        if (stdout) console.log(`stdout: ${stdout}`);
    });

    exec('bookmarklet build/js/built-deps.js > build/bookmarks/deps-bookmark', (err, stdout, stderr) => {
        if (err) { console.log(err); return; }
        if (stdout) console.log(`stdout: ${stdout}`);
    });
    await delay(1000);

    let dates = await fs.readFileSync("build/bookmarks/dates-bookmark").toString();
    let deps = await fs.readFileSync("build/bookmarks/deps-bookmark").toString();

    let template = fs.readFileSync("src/templates/readme.md").toString();
    let output = render(template, { dates, deps });
    fs.writeFileSync('readme.md', output);

})();
