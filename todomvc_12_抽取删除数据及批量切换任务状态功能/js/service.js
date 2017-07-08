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
      
      this.save()
    }

    // 3.删除任务
    this.remove = function(id){
     for (var i = 0; i < todos.length; i++) {
        var item = todos[i]
        if(item.id === id){
          todos.splice(i,1) // 删除数据

          var str = JSON.stringify(todos)
          $window.localStorage.setItem
          this.save()
          return
        }
      }
   }

   // 保存数据，保存到localStorage中
   this.save = function(){
     var str = JSON.stringify(todos)
      $window.localStorage.setItem('mytodos',str)
   }

   // 功能6.批量切换任务状态
   this.toggleAll = function(selectAll){
     for (var i = 0; i < todos.length; i++) {
        var item = todos[i]
        item.completed = selectAll
      }
    this.save()
   }

   // 功能7 获取未完成任务数据
   this.getActive = function(){
     var count = 0
      // 遍历todos, 找到所有completed属性值为false的数据
      for (var i = 0; i < todos.length; i++) {
        var item = todos[i]
        if(!item.completed){
          count++
        }
      }
      // this.save()
      return count
   }

   // 功能8 删除所有已完成
   this.clearAll = function(){
     for (var i = todos.length - 1; i >= 0; i--) {
        // true(0),false(1),false(2)
        var item = todos[i]
        if(item.completed){
          todos.splice(i,1)
        }
      }
      this.save()
   }
    
  }])
})(angular)