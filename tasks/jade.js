import gulp from 'gulp';
import { config, $, bs, errorLogFunc, isDev, isProd } from './config';

const utils = {
  addZeroToNumber(num) {
    return ('0' + num).slice(-2);
  },
};

gulp.task('jade', () =>
  gulp.src([config.src.jade])
    .pipe($.jade({
      locals: { ...require('../src/data').default, DEV: isDev, PROD: isProd, ...utils },
    })).on('error', errorLogFunc)

    .pipe($.posthtml(config.POSTHTML_PROCESSORS))
    .pipe($.if(isDev, $.jsbeautifier(config.jsbeautifierConfig)))
    .pipe(gulp.dest(config.dest.app))
    .on('end', bs.reload),
);
