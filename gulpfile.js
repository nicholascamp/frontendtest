var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');

gulp.task('css', function () {
    return gulp.src('src/css/style.css')
    .pipe(gulp.dest('build/css'))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('js',function(){
  gulp.src('src/js/main.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(gulp.dest('build/js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('build/js'))
    .pipe(browserSync.reload({stream:true, once: true}));
});

gulp.task('img', function () {
    gulp.src('src/img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('build/img'));
});

gulp.task('browser-sync', function() {
    browserSync.init(null, {
		    port: 7007,
        server: {
            baseDir: "build"
        }
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('default', ['css', 'js', 'browser-sync', 'img'], function () {
    gulp.watch("src/css/*.css", ['css']);
    gulp.watch("src/js/*.js", ['js']);
    gulp.watch("src/img/*/*", ['img']);
    gulp.watch("build/*.html", ['bs-reload']);
});