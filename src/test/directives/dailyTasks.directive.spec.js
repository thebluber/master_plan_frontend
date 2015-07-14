'use strict';

describe('dailyTasks.directive', function() {
  var scope,
      taskService,
      task,
      httpBackend,
      compile;
  beforeEach(module('MasterPlan', 'app/views/directives/dailyTasks.html'));
  beforeEach(inject(function($injector) {
    scope = $injector.get('$rootScope');
    compile = $injector.get('$compile');
    taskService = $injector.get('Task');
    httpBackend = $injector.get('$httpBackend');

    task = {
      id: 1,
      description: 'Do something!',
      type: 'weekly',
      category: { id: 1, name: 'work' },
      goal: null,
      deadline: null
    };

  }));

  it('should fetch todays tasks', function(){
    var today = (new Date()).toJSON().split('T')[0];
    var element = compile('<daily-tasks></daily-tasks>')(scope);
    httpBackend.expect('GET', '/api/v1/tasks/for_date/' + today).respond([task]);
    scope.$digest();
    httpBackend.flush();
    expect(scope.dailyTasks[0].id).toEqual(1);
    expect(scope.dailyTasks[0].description).toEqual('Do something!');
    expect(scope.dailyTasks[0].type).toEqual('weekly');
  });

  it('should render tasks', function(){
    var today = (new Date()).toJSON().split('T')[0];
    var element = compile('<daily-tasks></daily-tasks>')(scope);
    httpBackend.expect('GET', '/api/v1/tasks/for_date/' + today).respond([task]);
    scope.$digest();
    httpBackend.flush();
    expect(element.html()).toContain('Do something!');
    expect(element.html()).toContain('weekly');
    expect(element.html()).toContain('work');
  });
});
