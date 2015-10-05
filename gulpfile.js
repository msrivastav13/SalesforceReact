var gulp = require('gulp');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var streamify = require('gulp-streamify');
var zip = require('gulp-zip');

var path = {
  MINIFIED_OUT: 'build.min.js',
  OUT: 'build.js',
  DEST: 'dist',
  DEST_BUILD: 'dist/build',
  DEST_SRC: 'dist/src',
  ENTRY_POINT: 'ReactJS/js/App.js',
  RESOURCE_DESTINATION: 'src/staticresources',
  RESOURCE_NAME: 'App.resource'
};

gulp.task('build', function(){
  browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify]
  })
    .bundle()
    .pipe(source(path.MINIFIED_OUT))
    //.pipe(streamify(uglify(path.MINIFIED_OUT)))
    //Open the above line for final PRODUCTION deployment
    .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task ('zip',function(){
  gulp.src ('dist/build/*')
    .pipe(zip(path.RESOURCE_NAME))
    .pipe(gulp.dest (path.RESOURCE_DESTINATION));
});


gulp.task('default', ['build','zip']);


