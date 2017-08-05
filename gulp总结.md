- npm --> 迅雷
- npmjs.com --> 种子网站
- package.json --> 种子
- npm install 库或框架名 --save --> 存到package.json当中
- 思考
    1. 倘若我让线上的网站（不论PC还是移动端）使用的css文件，JS文件，images文件等静态资源，JS是压缩过的，css是压缩过的，images（主要针对雪碧图）也是压缩过的，好来减少文件的大小，从而提升一下浏览器的性能，那么应该怎么办？
    2. 如果说我们在项目中使用LESS，或者SASS作为CSS的预编译语言（浏览器本身是不支持LESS,SASS文件的，难道每次还要使用类似与考拉软件去处理这些吗？）
    3. 如果我想找一个东西帮我去处理上面的这些东西，我写的还是没有压缩的JS或者CSS/less/sass等，但是在页面上实际上运行（或者等到项目发布的时候替换为压缩过的文件），那么gulp就是你很好的选择。
- gulp很好的解决了上面的事情
- gulp api介绍
    + gulp.task 创建一个任务
    + gulp.src 要处理谁
    + gulp.dest 处理完了放哪里
    + gulp.watch 监视
    + gulp.run 处理
- 理解gulp的插件的玩法套路
