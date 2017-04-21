import fs from 'fs';
import gulp from 'gulp';
import { config, $, bs, errorLogFunc, isDev } from './config';

gulp.task('jade', () => {
  const data = JSON.parse(fs.readFileSync(config.src.dataJson, 'utf-8'));

  return gulp.src([config.src.jade])
    .pipe($.jade({ locals: data }))
      .on('error', errorLogFunc)

    .pipe($.posthtml(config.POSTHTML_PROCESSORS))
    .pipe($.if(isDev, $.jsbeautifier(config.jsbeautifierConfig)))
    .pipe(gulp.dest(config.dest.app))
    .on('end', bs.reload);
});
