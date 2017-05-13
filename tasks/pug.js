import gulp from 'gulp';
import data from '../src/data';
import { config, $, bs, errorLogFunc, isDev, isProd } from './config';

const utils = {
  addZeroToNumber(num) {
    return ('0' + num).slice(-2);
  },

  randomInt(max, min) {
    return Math.floor(Math.random() * (max - (min + 1))) + min;
  },

  randomText() {
    return data.text[utils.randomInt(data.text.length - 1, 0)];
  },

  randomTag() {
    return data.tags[utils.randomInt(data.tags.length - 1, 0)];
  },

  randomImage(width, height) {
    if (isProd) {
      return `https://unsplash.it/${width}/${height}/?random=${utils.randomInt(1000, 1)}`;
    }
    return `http://placehold.it/${width}x${height}`;
  },

  getActive(exp) {
    if (exp) return 'active';
    return '';
  },
};

gulp.task('pug', () =>
  gulp.src([config.src.pug])
    .pipe($.pug({
      locals: {
        ...require('../src/data').default,
        // ...data,
        ...utils,
        randomText: utils.randomText,
        DEV: isDev,
        PROD: isProd,
      },
    })).on('error', errorLogFunc)

    .pipe($.posthtml(config.POSTHTML_PROCESSORS))
    .pipe($.if(isDev, $.jsbeautifier(config.jsbeautifierConfig)))
    .pipe(gulp.dest(config.dest.app))
    .on('end', bs.reload),
);