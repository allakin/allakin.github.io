import gulp from 'gulp';
import { config, $, bs, errorLogFunc } from './config';

gulp.task('scripts', () =>
  gulp.src(config.src.scripts)
    .pipe($.include())
      .on('error', errorLogFunc)

    .pipe($.babel(config.babel))
      .on('error', errorLogFunc)

    .pipe($.concat('main.js'))

    .pipe($.addSrc('./node_modules/jquery/dist/jquery.min.js'))

    .pipe(gulp.dest(config.dest.scripts))
    .on('end', bs.reload)
);

gulp.task('libs', gulp.series('scripts'));
