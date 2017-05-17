import gulp from 'gulp';
import {
  config,
  $,
  bs,
  errorLogFunc,
  isDev,
  isProd,
  utils,
} from './config';

gulp.task('pug', () =>
  gulp.src([config.src.pug])
    .pipe($.pug({
      locals: {
        ...require('../src/data').default,
        ...utils,
        randomText: utils.randomText,
        DEV: isDev,
        PROD: isProd,
      },
    })).on('error', errorLogFunc)

    .pipe($.posthtml(config.POSTHTML_PROCESSORS))
    .pipe($.if(isDev, $.jsbeautifier(config.jsbeautifierConfig)))
    .pipe(gulp.dest(config.dest.app))
    .on('end', bs.reload),
);
