
var strSum = function(str) {
  var sum = 0;
  str.toUpperCase().split('').forEach(function(alphabet) {
    sum += alphabet.charCodeAt(0) - 64;
  });
  return sum;
};

var RandomSeeded = function(seed) {
  var seedInt;
  var constant = Math.pow(2, 13)+1;
  var prime = 1987;
  var maximum = 10000;

  switch (typeof seed) {
    case 'string':
      seedInt = strSum(seed);
      break;
    case 'number':
      seedInt = Math.round(seed * constant) + prime;
      break;
    default:
      // if there is no seed, use timestamp
      seedInt = (new Date()).getTime();
  }

  return {
    rand : function(min, max) {
      seedInt *= constant;
      seedInt += prime;
      seedInt = Math.round(seedInt); // make sure it's still an integer!
      if (min && max) {
        return min+seedInt%maximum/maximum*(max-min);
      } else {
        // if 'min' and 'max' are not provided, return random number between 0 & 1
        return (seedInt % maximum) / maximum;
      }
    }
  };
};

var webColors = ["337ab7", "5cb85c", "AA04DC", "45B2D3", "337ab7", "#d9534f"];

function deterministicWebColor(seed) {
  var rs = new RandomSeeded(seed);
  var whichColor = rs.rand(0, webColors.length - 1);
  return webColors[whichColor];
}

var app = angular.module('AdaLeoApp', ['ngSanitize']);

app.filter('isActive', function () {
  return function (courses) {
    return courses.filter(function (course) {
      return (course.hasOwnProperty('active') && person.active === true);
    });
  };
});

app.controller('CoursesController', ['$scope', '$http', function($scope, $http) {
  $scope.deterministicWebColor = deterministicWebColor;

  $http.get('data.json').success(function(data) {
    $scope.courses = data.courses;
  });

}]);

