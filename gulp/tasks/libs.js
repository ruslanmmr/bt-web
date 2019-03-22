module.exports = function () {
    $.gulp.task("libs", function () {
        return $.gulp.src("./src/libs/**/*.js")
            .pipe($.concat("libs.min.js"))
            .pipe($.gulp.dest("./dest/js/"))
            .pipe($.debug({"title": "scripts"}))
            .on("end", $.browsersync.reload);
    });
};