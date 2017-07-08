var myServiceModule = angular.module('myApp.service',[]);
myServiceModule.service('myService',[function(){
    this.school = 'itcast';
    this.subject = 'front end';
}]);