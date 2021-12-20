let fs = require("fs")
let concat = require('concat');
let { exec } = require('child_process');
let { render } = require("mustache");

exec('pug -c -D --name-after-file ./src/templates --out ./build/pugTemplates', (err, stdout, stderr) => {
    if (err) { console.log(err); return;}
    console.log(`stdout: ${stdout}`);
});

concat(['src/auth.js', 'src/setDates.js', 'build/pugTemplates/option.js'], 'build/js/built-dates.js')
concat(['src/auth.js', 'src/deps.js', 'build/pugTemplates/option.js'], 'build/js/built-deps.js')

exec('bookmarklet build/js/built-dates.js > build/bookmarks/dates-bookmark', (err, stdout, stderr) => {
    if (err) { console.log(err); return;}
    console.log(`stdout: ${stdout}`);
});

exec('bookmarklet build/js/built-deps.js > build/bookmarks/deps-bookmark', (err, stdout, stderr) => {
    if (err) { console.log(err); return;}
    console.log(`stdout: ${stdout}`);
});

let data = {
    deps: fs.readFileSync("build/bookmarks/deps-bookmark").toString(),
    dates: fs.readFileSync("build/bookmarks/dates-bookmark").toString()
}

let template = fs.readFileSync("src/templates/readme.md").toString()
let output = render(template, data);
fs.writeFileSync('readme.md', output);