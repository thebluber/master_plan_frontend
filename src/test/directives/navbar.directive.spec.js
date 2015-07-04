'use strict';

describe('navbar.directive', function(){

  var scope,
      userService,
      cookieStore,
      compile;

  beforeEach(module('MasterPlan', 'app/views/directives/navbar.html', 'app/views/home.html'));
  beforeEach(inject(function($injector) {
    scope = $injector.get('$rootScope');
    compile = $injector.get('$compile');
    userService = $injector.get('User');
    cookieStore = $injector.get('$cookieStore');
    spyOn(userService, 'authenticate');
  }));

  it('should list navigation menu', function() {
    cookieStore.put('current_user', { email: 'user@user.de', gravatarHash: '12345' });
    var element = compile('<navbar></navbar>')(scope);
    scope.$digest();
    expect(element.html()).toContain('Settings');
    expect(element.html()).toContain('Logout');
    expect(element.html()).toContain('Productivity');
  });

  it('should call authenticate if current_user is not set in cookie', function() {
    var element = compile('<navbar></navbar>')(scope);
    scope.$digest();
    expect(userService.authenticate).toHaveBeenCalled();
  });

  /*
  it('should have gravatar img', function() {
    cookieStore.put('current_user', { email: 'user@user.de', gravatarHash: '12345' });
    var element = compile('<navbar></navbar>')(scope);
    scope.$digest();
    expect(element.find('img').attr('src')).toMatch('http://www.gravatar.com/avatar/12345');
  });
  */

});
