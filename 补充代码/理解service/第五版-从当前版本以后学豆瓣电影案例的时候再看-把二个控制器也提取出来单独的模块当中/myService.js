var myServiceModule = angular.module('myServiceModule',[]);
myServiceModule.service('myService',[function(){
    this.school = 'itcast';
    this.subject = 'front end';
}]);