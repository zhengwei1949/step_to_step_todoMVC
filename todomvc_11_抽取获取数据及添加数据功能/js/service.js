(function(angular){
  
  // 1.创建服务模块
  var app = angular.module('service',[])

  // 2.创建服务
  // 第一个参数：服务的名字
  // 第二个参数里的function: 
  //    angular会把这个function当作构建函数，angular会帮助我们new这个构建函数，然后得到一个对象。A,B
  app.service('MyService', ['$window',function($window){
    // console.log($window === window);
    var str = $window.localStorage.getItem('mytodos')|| '[]'
    var todos  = JSON.parse(str);

    // 1.返回任务数据
    this.get = function(){
      return todos
    }

    // 2.添加数据
    this.add = function(newTodo){
       // 把新任务添加到todos中去
      todos.push({
        id:Math.random(),
        name:newTodo,
        completed:false
      })
      
      var str = JSON.stringify(todos);
      $window.localStorage.setItem('mytodos',str);
    }
    
  }])
})(angular)