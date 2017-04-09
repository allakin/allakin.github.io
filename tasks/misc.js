import gulp from 'gulp';
import { config, bs } from './config';

gulp.task('misc', () =>
  gulp.src(config.src.misc)
    .pipe(gulp.dest(config.dest.misc))
    .on('end', bs.reload)
);
