import gulp from 'gulp';
import del from 'del';
import { config, $ } from './config';

gulp.task('watch', (cb) => {
  gulp.watch(config.watch.scripts, gulp.parallel('scripts'));
  gulp.watch(config.src.images, gulp.parallel('images'));
  gulp.watch(config.src.misc, gulp.parallel('misc'));
  gulp.watch(config.watch.style, gulp.parallel('style'));

  gulp.watch([
    config.src.data,
    config.src.pug,
    config.src.layouts,
    config.src.mixins,
    config.src.components,
    config.src.includes,
  ], gulp.parallel('pug'));

  cb();
});

gulp.task('delete_dist', () =>
  del([config.dest.app])
);

gulp.task('zip', () =>
  gulp.src('./dist/**')
    .pipe($.zip('project.zip'))
    .pipe(gulp.dest(config.dest.app))
);

gulp.task('build', gulp.series(
  'delete_dist',
  'pug',
  'style',
  'images',
  'misc',
  'libs',
));

gulp.task('default', gulp.series('watch', 'server'));
