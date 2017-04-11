import gulp from 'gulp';
import { config, $, bs, errorLogFunc, isDev } from './config';

const reload = bs.reload;

const source = [
  // './node_modules/bootstrap-only-css/lib/alerts.css',
  // './node_modules/bootstrap-only-css/lib/badges.css',
  // './node_modules/bootstrap-only-css/lib/breadcrumbs.css',
  // './node_modules/bootstrap-only-css/lib/buttons.css',
  // './node_modules/bootstrap-only-css/lib/carousel.css',
  // './node_modules/bootstrap-only-css/lib/close.css',
  // './node_modules/bootstrap-only-css/lib/code.css',
  // './node_modules/bootstrap-only-css/lib/component-animations.css',
  // './node_modules/bootstrap-only-css/lib/dropdowns.css',
  // './node_modules/bootstrap-only-css/lib/forms.css',
  // './node_modules/bootstrap-only-css/lib/grid.css',
  // './node_modules/bootstrap-only-css/lib/input-groups.css',
  // './node_modules/bootstrap-only-css/lib/jumbotron.css',
  // './node_modules/bootstrap-only-css/lib/labels.css',
  // './node_modules/bootstrap-only-css/lib/list-group.css',
  // './node_modules/bootstrap-only-css/lib/media.css',
  // './node_modules/bootstrap-only-css/lib/modals.css',
  // './node_modules/bootstrap-only-css/lib/navs.css',
  './node_modules/bootstrap-only-css/lib/normalize.css',
  // './node_modules/bootstrap-only-css/lib/pager.css',
  // './node_modules/bootstrap-only-css/lib/pagination.css',
  // './node_modules/bootstrap-only-css/lib/panels.css',
  // './node_modules/bootstrap-only-css/lib/popovers.css',
  // './node_modules/bootstrap-only-css/lib/print.css',
  // './node_modules/bootstrap-only-css/lib/progress-bars.css',
  // './node_modules/bootstrap-only-css/lib/responsive-embed.css',
  // './node_modules/bootstrap-only-css/lib/responsive-utilities.css',
  './node_modules/bootstrap-only-css/lib/scaffolding.css',
  // './node_modules/bootstrap-only-css/lib/tables.css',
  // './node_modules/bootstrap-only-css/lib/thumbnails.css',
  // './node_modules/bootstrap-only-css/lib/tooltip.css',
  // './node_modules/bootstrap-only-css/lib/type.css',
  // './node_modules/bootstrap-only-css/lib/utilities.css',
  // './node_modules/bootstrap-only-css/lib/wells.css',

  // './node_modules/css.modifiers/lib/box-sizing.css',
  './node_modules/css.modifiers/lib/center.css',
  './node_modules/css.modifiers/lib/cursor.css',
  './node_modules/css.modifiers/lib/display.css',
  './node_modules/css.modifiers/lib/float.css',
  './node_modules/css.modifiers/lib/fluid.css',
  './node_modules/css.modifiers/lib/font-weight.css',
  './node_modules/css.modifiers/lib/hard-hide.css',
  './node_modules/css.modifiers/lib/list.css',
  './node_modules/css.modifiers/lib/margin.css',
  './node_modules/css.modifiers/lib/middle.css',
  './node_modules/css.modifiers/lib/outline.css',
  './node_modules/css.modifiers/lib/padding.css',
  './node_modules/css.modifiers/lib/position.css',
  './node_modules/css.modifiers/lib/select.css',
  './node_modules/css.modifiers/lib/text.css',
  './node_modules/css.modifiers/lib/underline.css',

  config.src.style,
];

gulp.task('style', () =>
  gulp.src(source)
    .pipe($.sassGlobImport())
    .pipe($.sass().on('error', errorLogFunc))
    .pipe($.concat('style.css'))
    .pipe($.postcss(config.PROCESSORS))
    .pipe($.csso())
    .pipe($.if(isDev, $.postcss(config.PROCESSORS_PERFECTIONIST)))
    .pipe(gulp.dest(config.dest.style))
    .pipe(reload({ stream: true }))
);
