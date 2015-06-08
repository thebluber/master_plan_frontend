'use strict';

describe('navbar.directive', function(){

  var scope,
      compile;

  beforeEach(module('MasterPlan', 'app/views/directives/navbar.html'));
  beforeEach(inject(function($injector) {
    scope = $injector.get('$rootScope');
    compile = $injector.get('$compile');
  }));

  it('should list navigation menu', function() {
    var element = compile('<navbar></navbar>')(scope);
    scope.$digest();
    expect(element.html()).toContain('Settings');
    expect(element.html()).toContain('Logout');
    expect(element.html()).toContain('Productivity');
  });

  it('should have gravatar img', function() {
    scope.gravatarHash = "12345";
    var element = compile('<navbar></navbar>')(scope);
    scope.$digest();
    expect(element.find('img').attr('src')).toMatch('http://www.gravatar.com/avatar/12345');
  });

});
