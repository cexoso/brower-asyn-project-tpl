var browserSync=require("browser-sync");
var gulp= require('gulp');
var sass=require("gulp-sass");
var autoprefixer = require('gulp-autoprefixer');
var chokidar = require('chokidar');
gulp.task('browser-sync',["watch"],function() {
    browserSync.init({
        server: {
            baseDir: ["app"]
        },
        middleware: [function (req, res, next) {
          next();
        }],
        port:80
    });
});
gulp.task("watch",function(){
  chokidar.watch('app/**/*.scss')
    .on("change",function(path){
      gulp.src(path, {
          base: '.'
      })
      .pipe(sass()
          .on('error', sass.logError))
      .pipe(autoprefixer({
          browsers: ['last 2 versions']
      }))
      .pipe(gulp.dest('./'))
      .pipe(browserSync.stream());
    });
  chokidar.watch('app/**/*.html')
    .on("change",function(path){
      browserSync.reload();
    });
});
gulp.task("default",['browser-sync']);
