import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import faker from 'faker';

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
    mixins: './src/mixins/**/!(_)*.pug',
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
      './src/mixins/**/*.scss',
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
    require('postcss-pseudoelements')({
      single: true, // default
      selectors: ['before', 'after', 'first-letter', 'first-line'], // default
    }),
  ],

  PERFECTIONIST: [
    require('perfectionist'),
  ],

  babel: {
    comments: false,
    presets: ['es2015'],
  },
};

export const transliterate = (text = '', engToRus = false) => {
  const rus = 'щ   ш  ч  ц  ю  я  ё  ж  ъ  ы  э  а б в г д е з и й к л м н о п р с т у ф х ь'.split(/ +/g);
  const eng = "shh sh ch cz yu ya yo zh `` y' e` a b v g d e z i j k l m n o p r s t u f x `".split(/ +/g);

  rus.map((e, x) => {
    text = text.split(engToRus ? eng[x] : rus[x]).join(engToRus ? rus[x] : eng[x]);
    text = text.split(engToRus ? eng[x].toUpperCase() : rus[x].toUpperCase()).join(engToRus ? rus[x].toUpperCase() : eng[x].toUpperCase());
  });

  return text;
};

export const capitalizeFirstChar = string => string.charAt(0).toUpperCase() + string.substring(1);

export const utils = {
  addZeroToNumber(num) {
    return ('0' + num).slice(-2);
  },

  randomInt(min, max) {
    return faker.random.number({ min, max });
  },

  randomTag() {
    return capitalizeFirstChar(faker.random.word());
  },

  randomImage(width, height) {
    if (isProd) {
      return `https://unsplash.it/${width}/${height}/?random=${utils.randomInt(1000, 1)}`;
    }
    return `http://placehold.it/${width}x${height}`;
  },

  softRandomImage(width, height) {
    if (isProd) {
      return `https://unsplash.it/${width}/${height}`;
    }
    return `http://placehold.it/${width}x${height}`;
  },

  getActive(exp) {
    if (exp) return 'active';
    return '';
  },

  getRandomText() {
    return transliterate(faker.lorem.paragraph(), true);
  },

  getRandomBool() {
    return faker.random.boolean();
  },
};
