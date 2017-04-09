import gulp from 'gulp';
import { config, $, bs, errorLogFunc } from './config';

const reload = bs.reload;

const source = [
  config.src.style,
];

gulp.task('style', () =>
  gulp.src(source)
    .pipe($.sassGlobImport())
    .pipe($.sass().on('error', errorLogFunc))
    .pipe($.concat('style.css'))
    .pipe($.postcss(config.PROCESSORS))
    .pipe($.csso())
    .pipe($.postcss(config.PROCESSORS_PERFECTIONIST))
    .pipe(gulp.dest(config.dest.style))
    .pipe(reload({ stream: true }))
);
