'use strict';

describe('Controller: MynewrouteCtrl', function () {

  // load the controller's module
  beforeEach(module('myANgularTestApp'));

  var MynewrouteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MynewrouteCtrl = $controller('MynewrouteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
