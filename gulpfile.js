var gulp = require('gulp');

require('@ftbl/gulp')(gulp, { test: { coverage: 50 }});

gulp.task('default', [ 'test' ]);