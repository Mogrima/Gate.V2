var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssnano = require("gulp-cssnano");
var uglify = require("gulp-uglify");
var rigger = require("gulp-rigger");
var imagemin = require("gulp-imagemin");
var rename = require("gulp-rename");
var concat = require("gulp-concat");
var server = require("browser-sync").create();
gulp.task("html:build", function () {
    gulp.src("src/**/*.html") //Выберем файлы по нужному пути
        .pipe(rigger()) //Прогоним через rigger
        .pipe(gulp.dest("dist/")) //Выплюнем их в папку build
        .pipe(server.stream()); //И перезагрузим наш сервер для обновлений
});
 gulp.task("style", function() {
  gulp.src("src/less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest("dist/css"))
    .pipe(server.stream());
});
 gulp.task("scripts", function() {
    return gulp.src("src/js/*.js") // директория откуда брать исходники
        .pipe(concat('scripts.js')) // объеденим все js-файлы в один 
        .pipe(uglify()) // вызов плагина uglify - сжатие кода
        .pipe(rename({ suffix: '.min' })) // вызов плагина rename - переименование файла с приставкой .min
        .pipe(gulp.dest("dist/js")); // директория продакшена, т.е. куда сложить готовый файл
});
 /*gulp.task("js", function () {
    gulp.src("src/js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"))
        .pipe(server.stream());
});*/
 gulp.task("image:build", function () {
    gulp.src("src/img/**/*.*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/img"))
    .pipe(server.stream());
});

 gulp.task("book", function() {
   gulp.src("src/less/book.less")
     .pipe(plumber())
     .pipe(less())
     .pipe(postcss([
       autoprefixer()
     ]))
     .pipe(gulp.dest("dist/css"))
     .pipe(server.stream());
 });
 gulp.task("fonts:build", function() {
    gulp.src("src/fonts/**/.*")
        .pipe(gulp.dest("dist/fonts"))
});
 gulp.task("serve", ["style"], function() {
  server.init({
    server: "dist/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
   gulp.watch("src/less/**/*.less", ["style"]);
  gulp.watch("dist/**/.html").on("change", server.reload);
  gulp.watch(["src/**/*.html"], function(event, cb) {
        gulp.start("html:build");
    });
  gulp.watch(["src/fonts/**/.*"], function(event, cb) {
        gulp.start("fonts:build");
    });
});
