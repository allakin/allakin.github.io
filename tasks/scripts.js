import gulp from 'gulp';
import { config, $, bs, errorLogFunc, isProd } from './config';

gulp.task('scripts', () =>
  gulp.src(config.src.scripts)
    .pipe($.include())
      .on('error', errorLogFunc)

    .pipe($.babel(config.babel))
      .on('error', errorLogFunc)

    // .pipe($.concat('main.js'))
    .pipe($.if(isProd, $.uglify()))

    // add pugins
    .pipe($.addSrc('./node_modules/jquery/dist/jquery.min.js'))
    .pipe($.addSrc('./node_modules/hammerjs/hammer.min.js'))
    .pipe($.addSrc('./node_modules/velocity-animate/velocity.min.js'))
    .pipe($.addSrc('./node_modules/velocity-animate/velocity.ui.min.js'))
    .pipe($.addSrc('./node_modules/show-js-error/dist/show-js-error.custom.min.js'))

    .pipe(gulp.dest(config.dest.scripts))
    .on('end', bs.reload)
);

gulp.task('libs', gulp.series('scripts'));
