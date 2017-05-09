import gulp from 'gulp';
import del from 'del';
import { config, $ } from './config';

gulp.task('watch', (cb) => {
  gulp.watch(config.watch.scripts, gulp.parallel('scripts'));
  gulp.watch(config.src.images, gulp.parallel('images'));
  gulp.watch(config.src.dataJson, gulp.parallel('jade'));
  gulp.watch(config.src.misc, gulp.parallel('misc'));

  gulp.watch([
    './src/style/**/*.scss',
    './src/components/**/*.scss',
    './src/pages/**/*.scss',
  ], gulp.parallel('style'));

  gulp.watch([
    config.src.data,
    config.src.jade,
    config.src.layouts,
    config.src.mixins,
    config.src.components,
  ], gulp.parallel('jade'));

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
  'jade',
  'style',
  'images',
  'misc',
  'libs',
));

gulp.task('default', gulp.series('watch', 'server'));
