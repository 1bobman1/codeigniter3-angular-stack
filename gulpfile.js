 //required plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    fs = require('fs'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    beep = require('beepbeep'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    autoprefixer = require('gulp-autoprefixer'),
    scsslint = require('gulp-scss-lint'),
    csscomb = require('gulp-csscomb'),
    jshint = require('gulp-jshint'),
    jscs = require('gulp-jscs'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create(),
    cleanCSS = require('gulp-clean-css'),
    Server = require('karma').Server,
    rename = require("gulp-rename"),
    template = require('gulp-template'),
    HOST;

//project settings
var settings = {
    server: '',
    root: 'public/',
    sassDir: 'assets/scss/**/*.scss',
    cssDest: 'public/css/',
    jsDir: 'assets/js/**/**/*.js',
    jsMainDir: 'assets/js/main/**/*.js',
    jsDest: 'public/js/'
},
//plumber error handling
onError = function (err) {
    beep();
    console.log(err);
    this.emit('end');
};

//run unit test
gulp.task('test', function (done) {
    new Server({
      configFile: __dirname + '/karma.conf.js',
      singleRun: true
    }, done).start();
});
gulp.task('testLog', function (done) {
new Server({
    configFile: __dirname + '/karmaLogin.conf.js',
    singleRun: true
}, done).start();
});

//compile css
gulp.task('css', function () {
    gulp.src('public/css/style.css')
        .pipe(sourcemaps.init())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(sourcemaps.write())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('public/css/'));

});

//compile sass
gulp.task('sass', function () {
    gulp.src(settings.sassDir)
        .pipe(plumber(onError))
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer({
            browsers: ['last 4 versions', 'iOS 9'],
            cascade: false
        }))
        .pipe(csscomb())
        .pipe(concat('style.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(settings.cssDest))
        .pipe(browserSync.stream());
});

gulp.task('scripts', function () {
        gulp.src(settings.jsMainDir)
            .pipe(jshint.reporter('default'))
            .pipe(jscs())
            .pipe(jscs.reporter())
            .pipe(concat('main.min.js'))
            //.pipe(uglify())
            .pipe(gulp.dest(settings.jsDest));
});

gulp.task('watch', ['sass', 'scripts'], function () {
    gulp.watch(settings.jsDir, ['scripts']).on('change', browserSync.reload),
        gulp.watch(settings.sassDir, ['sass']).on('change', browserSync.reload);
});

// serve/init browsersync
gulp.task('serve', ['css', 'sass', 'scripts'], function () {

    browserSync.init({
        server: {
            baseDir: settings.root
        },
        ghostMode: false
    });

    gulp.watch(settings.jsDir, ['scripts']).on('change', browserSync.reload),
        gulp.watch(settings.sassDir, ['sass']).on('change', browserSync.reload);

});

gulp.task('default', ['sass', 'scripts', 'serve']);
