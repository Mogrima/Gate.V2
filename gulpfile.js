var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var rigger = require("gulp-rigger");
var uglify = require("gulp-uglify");
var imagemin = require("gulp-imagemin");
var server = require("browser-sync").create();
gulp.task("html", function () {
    gulp.src("src/**/*.html")
        .pipe(rigger())
        .pipe(gulp.dest("dist/"))
        .pipe(server.stream());
});
 gulp.task("style", function() {
  gulp.src("src/less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("dist/css"))
    .pipe(server.stream());
});
 gulp.task("js", function () {
    gulp.src("src/js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"))
        .pipe(server.stream());
});
 gulp.task("image", function () {
    gulp.src("src/img/**/*.*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/img"))
    .pipe(server.stream());
});
 gulp.task("fonts", function() {
    gulp.src("src/fonts/**/*.*")
        .pipe(gulp.dest("dist/fonts"))
});
 gulp.task("build", [
    "html",
    "js",
    "style",
    "fonts",
    "image"
]);
 gulp.task("serve", ["build"], function() {
  server.init({
    server: "dist/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
   gulp.watch("src/less/**/*.less", ["style"]);
  gulp.watch("dist/**/*.html").on("change", server.reload);
  gulp.watch(["src/**/*.html"], function(event, cb) {
        gulp.start("html");
    });
  gulp.watch(["src/js/*.js"], function(event, cb) {
        gulp.start("js");
    });
  gulp.watch(["src/img/**/*.*"], function(event, cb) {
        gulp.start("image");
    });
  gulp.watch(["src/fonts/**/*.*"], function(event, cb) {
        gulp.start("fonts");
    });
});
