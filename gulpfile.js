const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("dev:styles:sass", () => {
  return gulp
    .src("src/sass/skat.scss")
    .pipe(sass())
    .pipe(gulp.dest("dev/css/"));
});

gulp.task("dev:styles:guide", () => {
  return gulp.src("src/guide-assets/css/guide.css").pipe(gulp.dest("dev/css"));
});

gulp.task("dev:images", () => {
  return gulp.src("src/images/**/*").pipe(gulp.dest("dev/images"));
});

gulp.task("dev:styles", ["dev:styles:sass", "dev:styles:guide"]);

gulp.task("dev:scripts", () => {
  return gulp
    .src(["src/guide-assets/js/*.js", "node_modules/jquery/dist/jquery.js"])
    .pipe(gulp.dest("dev/js"));
});

gulp.task("dev:watch", ["dev:styles", "dev:scripts", "dev:images"], () => {
  gulp.watch("src/sass/**/*.scss", ["dev:styles:sass"]);
  gulp.watch("src/guide-assets/**/*.js", ["dev:scripts"]);
  gulp.watch("src/guide-assets/css/guide.css", ["dev:styles:guide"]);
});
