var fs = require('fs');
const {
    extname,
    resolve,
    basename
} = require('path');
let dirs = fs.readdirSync('./code');
for (let x of dirs) {
    if (extname(x) == '.json') {
        let b = x.replace('.json', '')
        let funname = `_area_jsonp_${b}`
        let p = fs.createWriteStream(resolve('./jsonp/' + x.replace('.json', '.js')));
        p.write(`if(${funname}){${funname}(`)
        p.write(fs.readFileSync(resolve('./code/' + x)))
        p.write(')}')
    }
}