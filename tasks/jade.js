import fs from 'fs';
import gulp from 'gulp';
import { config, $, bs, errorLogFunc } from './config';

gulp.task('jade', () => {
  const data = JSON.parse(fs.readFileSync(config.src.dataJson, 'utf-8'));

  return gulp.src([config.src.jade])
    .pipe($.jade({ locals: data }))
      .on('error', errorLogFunc)

    .pipe($.posthtml([
      require('posthtml-bem')({
        elemPrefix: '__',
        modPrefix: '_',
        modDlmtr: '--',
      }),
    ]))

    .pipe($.jsbeautifier({
      braceStyle: 'expand',
      indentWithTabs: true,
      indentInnerHtml: true,
      preserveNewlines: true,
      endWithNewline: true,
      wrapLineLength: 120,
      maxPreserveNewlines: 50,
      wrapAttributesIndentSize: 1,
      unformatted: ['use'],
    }))

    .pipe(gulp.dest(config.dest.app))
    .on('end', bs.reload);
});
