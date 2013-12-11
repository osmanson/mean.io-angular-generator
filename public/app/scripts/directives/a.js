'use strict';

angular.module('publicApp')
  .directive('a', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the a directive');
      }
    };
  });
