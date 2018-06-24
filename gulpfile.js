const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const templateCache = require('gulp-angular-templatecache');

const scripts = require('./scripts');
const styles = require('./styles');

var devMode = false;

gulp.task('css', function () {
	gulp.src(styles)
		.pipe(concat('libs.css'))
		.pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('sass', function() {
    gulp.src("./src/css/**/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
				.pipe(browserSync.reload({
					stream: true
				}));
});

gulp.task('jsVendor', function () {
	gulp.src(scripts)
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest('./dist/js'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('js', function () {
	gulp.src("./src/js/**/*.js")
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest('./dist/js'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('mainHtml', function () {
	gulp.src('./src/templates/index.html')
		.pipe(gulp.dest('./dist/'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('templatesJs', function () {
	gulp.src('./src/templates/views/**/*.html')
		.pipe(templateCache({standalone: true}))
		.pipe(gulp.dest('./dist/views'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('imagesJpg', function () {
	gulp.src('./src/images/*.jpg')
		.pipe(gulp.dest('./dist/images'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('imagesPng', function () {
	gulp.src('./src/images/*.png')
		.pipe(gulp.dest('./dist/images'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('build', function () {
	gulp.start(['css', 'sass', 'jsVendor', 'js', 'mainHtml', 'templatesJs', 'imagesJpg', 'imagesPng']);
});

gulp.task('browser-sync', function () {
	browserSync.init(null, {
		open: false,
		server: {
			baseDir: 'dist'
		}
	});
});

gulp.task('start', function () {
	devMode = true;
	gulp.start(['build', 'browser-sync']);
	gulp.watch(['./src/css/**/*.css'], ['css']);
	gulp.watch(['./src/js/**/*.js'], ['js']);
	gulp.watch(['./src/templates/index.html'], ['mainHtml']);
	gulp.watch(['./src/templates/views/**/*.html'], ['templatesJs']);
	gulp.watch(['./src/css/**/*.scss'],['sass']);
	gulp.watch(['./src/css/**/*.sass'],['sass']);
});

gulp.task('default', ['start']);