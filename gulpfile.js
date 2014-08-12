"use strict";

var gulp = require("gulp");
var r = require("gulp-load-plugins")();

var src = [
	"src/tracekit.js",
	"src/tracekit.helpers.js",
	"src/tracekit.defaultvalues.js",
	"src/tracekit.wrap.js",
	"src/tracekit.report.js",
	"src/tracekit.computestacktrace.js",
	"src/tracekit.asynchhandler.js"
]

var dest = "dist";

gulp.task("default", function() {
	return gulp.start("lint", "js", "js-min");
});

gulp.task("watch", function() {
	gulp.watch(src, ["lint", "js", "js-min"]);
	return gulp.start("default");
});

gulp.task("lint", function() {
	return gulp.src(src)
			.pipe(r.jshint())
			.pipe(r.jshint.reporter("default"));
});

gulp.task("js", function() {
	return gulp.src(src)
			.pipe(r.sourcemaps.init())
			.pipe(r.concat("all.js"))
			.pipe(r.rename({suffix: "-latest"}))
			.pipe(r.sourcemaps.write("./"))
			.pipe(gulp.dest(dest));
});

gulp.task("js-min", function() {
	return gulp.src(src)
			.pipe(r.sourcemaps.init())
			.pipe(r.concat("all.js"))
			.pipe(r.uglify({mangle: false}))
			.pipe(r.rename({suffix: "-latest.min"}))
			.pipe(r.sourcemaps.write("./"))
			.pipe(gulp.dest(dest));
});