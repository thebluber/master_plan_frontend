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
});
