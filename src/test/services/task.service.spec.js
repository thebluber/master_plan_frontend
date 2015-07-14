'use strict';

describe('task.service', function(){

  beforeEach(module('MasterPlan'));

  var taskService,
      httpBackend;

  beforeEach(inject(function($injector){
    taskService = $injector.get('Task');
    httpBackend = $injector.get('$httpBackend');
  }));

  //test tasksForDate
  it('should get user tasks for a given date', function(){
    httpBackend.expect('GET', '/api/v1/tasks/for_date/2015-07-05').respond([]);
    taskService.tasksForDate(new Date(2015, 6, 5, 20));
    httpBackend.flush();
  });

  //test toggleForDate
  it('should check or uncheck the given task for the given date', function(){
    httpBackend.expect('POST', '/api/v1/tasks/1/check_for_date/2015-07-05').respond([]);
    taskService.toggleForDate({id: 1, done: false}, new Date(2015, 6, 5, 20));
    httpBackend.flush();
    httpBackend.expect('DELETE', '/api/v1/tasks/1/uncheck_for_date/2015-07-05').respond([]);
    taskService.toggleForDate({id: 1, done: true}, new Date(2015, 6, 5, 20));
    httpBackend.flush();
  })
  

});
