(function(angular){
  
  // 1.创建服务模块
  var app = angular.module('service',[])

  // 2.创建服务
  // 第一个参数：服务的名字
  // 第二个参数里的function: 
  //    angular会把这个function当作构建函数，angular会帮助我们new这个构建函数，然后得到一个对象。A,B
  app.service('MyService', ['$window',function($window){
    // 1.返回任务数据
    this.get = function(){
      var str = $window.localStorage.getItem('mytodos')|| '[]'
      return JSON.parse(str);
    }
    
    this.save = function(todos){
      var str = JSON.stringify(todos);
      $window.localStorage.setItem('mytodos',str);
    }
  }])
})(angular)