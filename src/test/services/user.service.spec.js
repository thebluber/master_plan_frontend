'use strict';

describe('user.service', function(){

  beforeEach(module('MasterPlan'));
  beforeEach(module('stateMock'));

  //instantiate service
  var userService,
      state,
      httpBackend;

  beforeEach(inject(function($injector) {
    userService = $injector.get('User');
    httpBackend = $injector.get('$httpBackend');
    state = $injector.get('$state');
  }));

  //test authenticate
  it('should get current session', function() {
    httpBackend.expect('GET', '/api/v1/session').respond({ email: 'user@example.com' });
    userService.authenticate();
    httpBackend.flush();
    expect(userService.currentUser.email).toEqual('user@example.com');
  });

  it('should go to signin state if get session fails', function() {
    httpBackend.expect('GET', '/api/v1/session').respond(401, '');
    state.expectTransitionTo('signin');
    userService.authenticate();
    httpBackend.flush();
  });

  //test gravatarhash
  it('should generate gravatarHash from user email', function() {
    expect(userService.gravatarHash()).toEqual('');
    userService.currentUser = { email: 'User@example.com ' };
    expect(userService.gravatarHash()).toEqual('b58996c504c5638798eb6b511e6f49af');
  });

});
