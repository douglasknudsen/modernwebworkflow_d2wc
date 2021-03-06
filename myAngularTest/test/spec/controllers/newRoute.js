'use strict';

describe('Controller: NewrouteCtrl', function () {

  // load the controller's module
  beforeEach(module('myANgularTestApp'));

  var NewrouteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewrouteCtrl = $controller('NewrouteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
