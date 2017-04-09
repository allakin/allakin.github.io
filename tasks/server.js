import gulp from 'gulp';
import { config, bs } from './config';

gulp.task('server', () => {
  bs({
    server: {
      baseDir: config.dest.app,
    },
    open: false,
  });
});
