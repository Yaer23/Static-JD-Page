var gulp = require('gulp'),   //引入gulp插件
  sass = require('gulp-sass'),  //  sass文件的编译
  imagemin = require('gulp-imagemin'),  //图片的压缩
  autoprefixer = require('gulp-autoprefixer'),  //处理css浏览器前缀
  jshint = require('gulp-jshint'),  // js语法校验
  cssnano = require('gulp-cssnano'),  //css文件的压缩
  concat = require('gulp-concat'),  //文件合并
  cached = require('gulp-cached'),  //缓存当前任务中的文件，只让已修改的文件通过管道
  uglify = require('gulp-uglify'),  //js压缩
  browerSync = require('browser-sync'); //自动刷新

//scss文件的处理 （编译、合并、压缩）
gulp.task('sass-merge', function () {
  return gulp.src('src/sass/*.scss')
    // .pipe(cached('sass-merge'))
    .pipe(sass()) //将scss文件编译成css
    .pipe(autoprefixer('last 5 version')) //自动处理css浏览器前缀
    .pipe(concat('merge.css'))  // 合并管道中的css文件并命名为merge.css
    .pipe(cssnano())  //压缩管道中的文件
    .pipe(gulp.dest('dist/css/')) // 输出文件到指定目录dist/css/下
});

//调试阶段sass文件处理为css文件
gulp.task('sass-css', function () {
  return gulp.src('src/sass/*.scss')
    // .pipe(cached('sass-css'))
    .pipe(sass({outputStyle: 'expanded'}))  // 对sass/目录下的.scss结尾的文件进行编译成css文件
    .pipe(autoprefixer('last 5 version'))   // 自动处理css中的浏览器前缀
    .pipe(gulp.dest('src/css/'))  //  输出文件到src/css/目录中
});

//js文件的处理
gulp.task('scripts', function() {
  return gulp.src('src/js/*.js')
    // .pipe(cached('scripts'))
    .pipe(jshint()) //js校验
    .pipe(concat('main.js'))  //合并js文件命名为main.js
    .pipe(uglify()) //js文件进行压缩
    .pipe(gulp.dest('dist/js/'))  //输出文件到dist/js/下
});

//图片的处理
gulp.task('images', function() {
  return gulp.src('src/images/*') //匹配需要的图片
    // .pipe(cached())
    .pipe(imagemin({optimizationLevel: 3, progressive: true, interlaced: true, multipass: true})) //以规定格式进行图片压缩
    .pipe(gulp.dest('dist/images')) //输出文件
});

//设置默认gulp task
gulp.task('default',function() {  
  gulp.start('sass-merge','scripts','images'); //执行sass-merge，scripts, images这三个task
});

// 开启监听
gulp.task('watch', function () {
  // 启动刷新服务
  browerSync.init({
    server: {
      baseDir: 'dist'
    }
  });

  // 监听scss文件，当scss文件更新，执行sass-merge,sass-css这两个task
  gulp.watch('src/sass/*.scss',['sass-merge','sass-css']);
  // 监听js文件，当js文件更新,执行scipts 这个task任务
  gulp.watch('src/js/*.js',['scripts']);
  // 监听images文件，当images更新，执行images这个task
  gulp.watch('src/images/*', ['images']);
  // 只要dist目录下的文件更新，自动刷新页面
  gulp.watch(['dist/**/*']).on('change',browerSync.reload);

});