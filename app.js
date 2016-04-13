
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
      var zeroToOne = (seedInt % maximum) / maximum;
      // if 'min' and 'max' are provided, return float between min and max,
      // exclusive of max. if only min is provided, treat it like max,
      // with min of 0.
      if (min !== undefined) {
        if (max === undefined) {
          max = min;
          min = 0;
        }
        return min + (zeroToOne*(max-min));
      }
      return zeroToOne;
    }
  };
};

var webColors = ["337ab7", "5cb85c", "AA04DC", "45B2D3", "337ab7", "d9534f",
		 "D070D0", "FFA000", "609020", "000080", "008880", "6090F0", 
		 "60A0A0", "A02820", "8028E0", "008000", "FF00E0", "800080", 
		 "D07090", "4068E0", "804010", "0000E0", "308850", "F08080", 
		 "006000", "B08800", "506830", "FF8800", "9070D0", "008080", 
		 "4080B0", "FF6040", "403880", "305050", "C01080", "40D0D0"];

function deterministicWebColor(seed) {
  var rs = new RandomSeeded(seed);
  var rv = Math.floor(rs.rand(webColors.length));
  return "#" + webColors[rv];
}

var app = angular.module('AdaLeoApp', ['ngSanitize']);

app.filter('isActive', [function() {
  return function(courses) {
    return courses.filter( function(course) {
      return (course.hasOwnProperty('active') && course.active === true);
    });
  };
}]);

app.controller('CoursesController', ['$scope', '$http', function($scope, $http) {
  $scope.deterministicWebColor = deterministicWebColor;

  $http.get('data.json').success(function(data) {
    $scope.courses = data.courses;
    console.log("courses: ");
    console.log($scope.courses);
  });

}]);
