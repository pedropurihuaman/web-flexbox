// GULP
import gulp from 'gulp'

// CSS
import postcss from 'gulp-postcss'
import cssnano from 'cssnano'
import autoprefixer from 'autoprefixer'

// PUG
import pug from 'gulp-pug'

// SASS
import sass from 'gulp-sass'

// PLUMBER
import plumber from 'gulp-plumber'

// VARIABLES - CONSTANTES
const plugins_css = [cssnano(), autoprefixer()]

// TAREA PUG
gulp.task('views', () => {
	return gulp
		.src('./src/views/*.pug')
		.pipe(plumber())
		.pipe(pug({ pretty: true }))
		.pipe(gulp.dest('./public'))
})

// TAREA SASS
gulp.task('styles', () => {
	return gulp
		.src('./src/scss/styles.scss')
		.pipe(plumber())
		.pipe(sass({ outputStyle: 'compressed' }))
		.pipe(postcss(plugins_css))
		.pipe(gulp.dest('./public/css'))
})

// TAREA DEFAULT
gulp.task('default', () => {
	gulp.watch('./src/views/*.pug', gulp.series('views'))
	gulp.watch('./src/scss/**/*.scss', gulp.series('styles'))
})
