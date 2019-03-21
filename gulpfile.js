const { src, dest, parallel } = require('gulp');
var connect = require('gulp-connect');

function js() {
    return src(['./node_modules/@devexpress/analytics-core/dist/js/*.min.js',
    './node_modules/devexpress-dashboard/dist/js/dx-dashboard.min.js',
    './node_modules/devextreme/dist/js/dx.all.js',])
    .pipe(dest('./scripts'))
}

function css() {
    return src([
        './node_modules/@devexpress/analytics-core/dist/css/dx-analytics.light.css',
        './node_modules/devexpress-dashboard/dist/css/dx-dashboard.light.min.css',
        './node_modules/devextreme/dist/css/dx.common.css',
        './node_modules/devextreme/dist/css/dx.light.css',
        './node_modules/devextreme/dist/css/icons',
        './node_modules/devextreme/dist/css/fonts'
    ])
    .pipe(dest('styles'))
}

function run() {
    connect.server();
}

exports.default = parallel(js, css);
exports.run = run;