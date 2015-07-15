'use strict';

describe('user.service', function(){

  beforeEach(module('MasterPlan'));
  beforeEach(module('stateMock'));

  //instantiate service
  var userService,
      state,
      cookies,
      httpBackend;

  beforeEach(inject(function($injector) {
    userService = $injector.get('User');
    httpBackend = $injector.get('$httpBackend');
    cookies = $injector.get('$cookieStore');
    state = $injector.get('$state');
  }));

  //test authenticate
  it('should store current user email and gravatarHash in cookies', function() {
    httpBackend.expect('GET', '/api/v1/session').respond({ email: 'user@example.com', goals: [], categories: [] });
    userService.authenticate();
    httpBackend.flush();
    expect(cookies.get('current_user').email).toEqual('user@example.com');
    expect(cookies.get('current_user').gravatarHash).toEqual('b58996c504c5638798eb6b511e6f49af');
    expect(cookies.get('current_user').goals).toEqual([]);
    expect(cookies.get('current_user').categories).toEqual([]);
  });

  it('should go to signin state if get session fails and remove current user from cookie', function() {
    httpBackend.expect('GET', '/api/v1/session').respond(401, '');
    state.expectTransitionTo('signin');
    userService.authenticate();
    httpBackend.flush();
    expect(cookies.get('current_user')).toBeUndefined();
  });

  //test gravatarhash
  it('should generate gravatarHash from user email', function() {
    expect(userService.gravatarHash('User@example.com ')).toEqual('b58996c504c5638798eb6b511e6f49af');
    expect(userService.gravatarHash('user@example.com')).toEqual('b58996c504c5638798eb6b511e6f49af');
  });

});
