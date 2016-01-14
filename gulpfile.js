var browserSync=require("browser-sync");
var gulp= require('gulp');
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        middleware: [function (req, res, next) {
          console.log(123)
          next();
        }]
    });
});
gulp.task("default",['browser-sync']);
