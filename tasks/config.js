import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';

export const $ = gulpLoadPlugins({});
export const bs = browserSync;

export const isDev = (process.env.NODE_ENV || 'development') === 'development';
export const isProd = (process.env.NODE_ENV || 'development') === 'production';

export const AUTOPREFIXER_CONFIG = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1',
];

export const errorLogFunc = $.notify.onError({
  message: 'Error: <%= error.message %>',
  title: 'Error running something',
});

export const config = {
  src: {
    style: './src/style/**/style.scss',
    pug: './src/pages/!(_)*.pug',
    mixins: './src/mixins/!(_)*.pug',
    layouts: './src/layouts/*.pug',
    components: './src/components/**/*.pug',
    data: './src/data/**/*.js',
    scripts: [
      './src/scripts/!(_)*.js',
      './src/components/**/*.js',
    ],
    images: [
      './src/images/**',
      './src/components/**/*.png',
      './src/components/**/*.jpg',
      './src/components/**/*.svg',
    ],
    includes: './src/includes/**/*.*',
    misc: './src/misc/**',
  },

  watch: {
    scripts: [
      './src/scripts/**/*.js',
      './src/components/**/*.js',
    ],

    style: [
      './src/style/**/*.scss',
      './src/components/**/*.scss',
      './src/mixins/**/*.js',
      './src/pages/**/*.scss',
    ],
  },

  dest: {
    scripts: './dist/js/',
    style: './dist/css/',
    app: './dist/',
    images: './dist/img/',
    misc: './dist/',
  },

  jsbeautifierConfig: {
    braceStyle: 'expand',
    indentWithTabs: true,
    indentInnerHtml: true,
    preserveNewlines: true,
    endWithNewline: true,
    wrapLineLength: 120,
    maxPreserveNewlines: 50,
    wrapAttributesIndentSize: 1,
    unformatted: ['use'],
  },

  POSTHTML_PROCESSORS: [
    require('posthtml-bem')({
      elemPrefix: '__',
      modPrefix: '_',
      modDlmtr: '--',
    }),
  ],

  PROCESSORS: [
    require('autoprefixer')({ browsers: AUTOPREFIXER_CONFIG }),
    require('css-mqpacker'),
    require('postcss-discard-comments')({ removeAll: true }),
    require('postcss-csso'),
  ],

  PERFECTIONIST: [
    require('perfectionist'),
  ],

  babel: {
    comments: false,
    presets: ['es2015'],
  },
};
