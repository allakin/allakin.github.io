import gulp from 'gulp';
import { config, $, bs, errorLogFunc, isDev } from './config';

const reload = bs.reload;

gulp.task('style', () =>
  gulp.src(config.src.style)
    .pipe($.sassGlobImport())
    .pipe($.sass().on('error', errorLogFunc))
    .pipe($.concat('style.css'))

    .pipe($.addSrc('./node_modules/show-js-error/dist/show-js-error.css'))

    .pipe($.postcss(config.PROCESSORS))
    .pipe($.if(isDev, $.postcss(config.PERFECTIONIST)))
    .pipe(gulp.dest(config.dest.style))
    .pipe(reload({ stream: true }))
);
