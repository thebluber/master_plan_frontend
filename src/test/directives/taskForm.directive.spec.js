'use strict';

describe('taskForm.directive', function(){
  var scope,
      task,
      goals,
      categories;

  beforeEach(module('MasterPlan', 'app/views/directives/taskForm.html'));
  beforeEach(inject(function($injector) {
    scope = $injector.get('$rootScope');
    task = {
      id: 1,
      description: 'MyTask',
      category: { id: 1, name: 'work' },
      goal: { id: 2, title: 'MyGoal' },
      type: 'daily',
      deadline: '2015-07-15'
    };
    goals = [{ id: 1, title: 'Goal1'}, { id: 2, title: 'Goal2'}];
    categories = [{id: 1, name: 'work'}];

  }));

  it('should have task in the scope', inject(function($compile){
    var element = $compile('<task-form task="task" goals="goals" categories="categories"></task-form>')(scope);
    scope.task = task;
    scope.goals = goals;
    scope.categories = categories;
    scope.$digest();
    expect(element.isolateScope().task).toEqual(task);
    expect(element.isolateScope().goals).toEqual(goals);
    expect(element.isolateScope().categories).toEqual(categories);
  }));

  //test toggledatepicker
  it('should toggle datepicker', inject(function($compile){
    var element = $compile('<task-form task="task" goals="goals" categories="categories"></task-form>')(scope);
    scope.task = task;
    scope.goals = goals;
    scope.categories = categories;
    scope.$digest();
    element.isolateScope().toggleDatepicker(task);
    expect(element.isolateScope().datepickerOpen).toBe(true);
    element.isolateScope().toggleDatepicker(task);
    expect(element.isolateScope().datepickerOpen).toBe(false);
  }));

  //test watch pickedDate
  it('should watch the pickedDate and update task.deadline', inject(function($compile){
    var element = $compile('<task-form task="task" goals="goals" categories="categories"></task-form>')(scope);
    scope.task = task;
    scope.goals = goals;
    scope.categories = categories;
    scope.$digest();
    expect(element.isolateScope().pickedDate).toEqual(new Date(task.deadline));

    //update pickedDate
    element.isolateScope().pickedDate = new Date(2015, 6, 16);
    scope.$digest();
    expect(scope.task.deadline).toEqual('2015-07-16');

    //set pickedDate to null
    element.isolateScope().pickedDate = null;
    scope.$digest();
    expect(scope.task.deadline).toBe(null);
  }));

  //test clearDatepicker
  it('should close datePicker and clear pickedDate', inject(function($compile){
    var element = $compile('<task-form task="task" goals="goals" categories="categories"></task-form>')(scope);
    scope.task = task;
    scope.goals = goals;
    scope.categories = categories;
    scope.$digest();
  
    element.isolateScope().datepickerOpen = true;
    element.isolateScope().clearDatepicker();
    scope.$digest();
    expect(element.isolateScope().datepickerOpen).toBe(false);
    expect(scope.task.deadline).toBe(null);
  }));

});

