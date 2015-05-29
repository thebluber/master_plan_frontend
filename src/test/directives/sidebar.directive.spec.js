'use strict';

describe('sidebar.directive', function(){

  var scope,
      compile;

  beforeEach(module('MasterPlan', 'app/views/directives/sidebar.html'));
  beforeEach(inject(function($injector) {
    scope = $injector.get('$rootScope');
    compile = $injector.get('$compile');
  }));

  it('should list navigation menu', function() {
    var element = compile('<sidebar></sidebar>')(scope);
    scope.$digest();
    expect(element.html()).toContain('Settings');
    expect(element.html()).toContain('Logout');
    expect(element.html()).toContain('Productivity');
  });

  it('should have gravatar img', function() {
    scope.gravatarHash = "12345";
    var element = compile('<sidebar></sidebar>')(scope);
    scope.$digest();
    expect(element.find('img').attr('src')).toEqual('http://www.gravatar.com/avatar/12345?d=retro');
  });

});
