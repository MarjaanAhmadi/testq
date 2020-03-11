const { src, dest, series } = require('gulp');
const rename = require('gulp-rename');



function transpileJs(cb) {
    return src('build/static/js/*.js')
        .pipe(rename('app.js'))
        .pipe(dest('production/'))
    cb();
}
function transpileCss(cb) {
    return src('build/static/css/*.css')
        .pipe(rename('app.css'))
        .pipe(dest('production/style/'))
    cb();
}


exports.default = series(transpileJs, transpileCss);

