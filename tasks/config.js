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

// export function errorLogFunc(error) {
//   console.error(`
//     ----------ERROR MESSAGE START----------
//     [${error.name} in ${error.plugin}]
//     ${error.message}
//     -----------ERROR MESSAGE END-----------
//   `);
//   this.end();
// }

export const config = {
  src: {
    style: './src/style/**/style.scss',
    jade: './src/pages/!(_)*.jade',
    layouts: './src/layouts/*.jade',
    components: './src/components/**/*.jade',
    dataJson: './src/data/data.json',
    scripts: [
      './src/scripts/main.js',
      './src/components/**/*.js',
    ],
    images: [
      './src/images/**',
      './src/components/**/*.png',
      './src/components/**/*.jpg',
      './src/components/**/*.svg',
    ],
    misc: './src/misc/**',
  },

  watch: {
    scripts: [
      './src/scripts/**/*.js',
      './src/components/**/*.js',
    ],
  },

  dest: {
    scripts: './dist/js/',
    style: './dist/css/',
    app: './dist/',
    images: './dist/img/',
    misc: './dist/',
  },

  PROCESSORS: [
    require('autoprefixer')({ browsers: AUTOPREFIXER_CONFIG }),
    require('css-mqpacker'),
    require('postcss-discard-comments')({ removeAll: true }),
  ],

  PROCESSORS_PERFECTIONIST: [
    require('perfectionist'),
  ],

  babel: {
    comments: false,
    presets: ['es2015'],
  },
};
