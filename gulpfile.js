const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');

gulp.task('sass', function () {
	return gulp.src('./src/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./public/css'))
		.pipe(browserSync.stream());
});

gulp.task('sass:watch', function () {
	gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('browser-sync', ['sass'], function () {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});

	gulp.watch('./src/sass/**/*.scss', ['sass']);
	gulp.watch('./src/js/**/*.js', ['javascript']);
	gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('javascript', function () {
  return gulp.src('./src/js/**/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('./public/js'))
		.pipe(browserSync.stream());
});

gulp.task('javascript:watch', function () {
	gulp.watch('./src/js/**/*.js', ['javascript']);
});

gulp.task('default', ['browser-sync', 'javascript', 'sass', 'sass:watch', 'javascript:watch']);

