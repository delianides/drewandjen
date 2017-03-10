"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var $ = require("gulp-load-plugins")();

gulp.task("sass", function() {
  return gulp
    .src("./styles/style.scss")
    .pipe($.plumber())
    .pipe($.sass.sync({ errLogToConsole: true }))
    .pipe($.purifycss(["./pages/**/*.js", "./components/**/*.js"]))
    .pipe(
      $.autoprefixer(
        "last 2 version",
        "safari 5",
        "ie 9",
        "opera 12.1",
        "ios 6",
        "android 4"
      )
    )
    .pipe($.mergeMediaQueries({ log: true }))
    .pipe($.minifyCss())
    .pipe(gulp.dest("./static"));
});

gulp.task("sass:watch", function() {
  gulp.watch("./**/*.scss", ["sass"]);
});
