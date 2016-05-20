
var strSum = function(str) {
  var sum = 0;
  str.toUpperCase().split('').forEach(function(alphabet) {
    sum += alphabet.charCodeAt(0) - 64;
  });
  //console.log("str: " + str + "; sum: " + sum);
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
  if (seedInt < 0) { seedInt = seedInt * -1; }

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

var webColors = ["337ab7", "5cb85c", "AA04DC", "45B2D3", "d9534f",
		 "D070D0", "FFA000", "609020", "000080", "008880", "6090F0",
		 "60A0A0", "A02820", "8028E0", "008000", "FF00E0", "800080",
		 "D07090", "4068E0", "804010", "0000E0", "308850", "F08080",
		 "006000", "B08800", "506830", "FF8800", "9070D0", "008080",
		 "4080B0", "FF6040", "403880", "305050", "C01080", "40D0D0"];
// css colors for white text:  e84 orange;

var blueColors = ["45B2D3", "000080", "6090F0",
    "8028E0","4068E0", "0000E0",
    "9070D0", "4080B0", "403880", "337ab7"];

var hilightColors = [ "cceeee", "ffee77", "fff588",
"ffdd77", "cceeff", "ddccff", "ccccff", "ffcc88",  "ddff99"];

function deterministicWebColor(seed) {
  var rs = new RandomSeeded(seed);
  var rv = Math.floor(rs.rand(webColors.length));
  return "#" + webColors[rv];
}

function deterministicBlueColor(seed) {
  var rs = new RandomSeeded(seed);
  var rv = Math.floor(rs.rand(blueColors.length));
  return "#" + blueColors[rv];
}

function deterministicHilightColor(seed) {
  var rs = new RandomSeeded(seed);
  var rv = Math.floor(rs.rand(hilightColors.length));
  return "#" + hilightColors[rv];
}

var app = angular.module('AdaLeoApp', ['ngSanitize']);

app.filter('isActive', [function() {
  return function(courses) {
    return courses.filter( function(course) {
      return (course.hasOwnProperty('active') && (course.active === true));
    });
  };
}]);

app.factory('commonData', ['$http', '$q', function($http, $q){
  var menu = {};
  var staff = [];
  var courses = [];
  var faquestions = [];
  var testimonials = [];

  var loaded = false;
  var service={};

  var getData = function() {
    return {
      "menu": menu,
      "staff": staff,
      "courses": courses,
      "faquestions": faquestions,
      "testimonials": testimonials
    };
  };

  service.fetchData = function() {
    var dataDefer = $q.defer();
    if (loaded === true) {
      dataDefer.resolve(getData());
    } else {
      $http.get('data.json').success(function(data) {
        menu = data.menu;
        staff = data.staff;
        courses = data.courses;
        faquestions = data.faquestions;
        testimonials = data.testimonials;
        loaded = true;
        console.log("commonData fetched");
        dataDefer.resolve(getData());
      });
     }
     return dataDefer.promise;
  };

  return service;
}]);


app.controller('ColorController', ['$scope', function($scope) {
  $scope.deterministicWebColor = deterministicWebColor;
}]);

app.controller('MenuController', ['$scope', 'commonData', function($scope, commonData) {
  commonData.fetchData().then(function(data) {
    $scope.hierarchicalMenuItems = data.menu.hierarchical;
    $scope.compactMenuItems = data.menu.compact;
    // console.log($scope.compactMenuItems);
  });

  $scope.menuParentClicked = function(parentItem) {
    if (parentItem.url === undefined || parentItem.url === null || parentItem.url.length < 1) {
      return false;
    }
  };
}]);


app.controller('CoursesController', ['$scope', 'commonData', function($scope, commonData) {
  $scope.deterministicWebColor = deterministicWebColor;
  $scope.deterministicHilightColor = deterministicHilightColor;

  commonData.fetchData().then(function(data) {
    $scope.courses = data.courses;
    $scope.staff = data.staff;
    console.log("courses: ");
    console.log($scope.courses);
  });

  $scope.seasons = function() {
    return _.uniq(_.map($scope.courses, "session"));
  };

  $scope.activeCoursesForSeason = function(season) {
    return _.filter($scope.courses, function(course){
      return _.includes(season, course.session);
    });
  };

  // gets all the teacher objects for the fullnames listed for each course
  $scope.getTeachers = function(teacherFullnameArr) {
    return [$scope.staff[0]];
    return _.map(teacherFullnameArr, function(teacherFullname) {
      var teacherRecord = _.find($scope.staff, {"fullname": teacherFullname});
      if ((teacherRecord !== undefined) && (teacherRecord !== null)) {
        console.log("found teacher with fullname: " + teacherFullname);
        return teacherRecord;
      } else {
        console.log("found no teacher with fullname: " + teacherFullname);
        return {
          "fullname": teacherFullname,
          "nutshell": null
        };
      }
    });
  };

  $scope.numColsForCourse = function(course, numColsAlwaysPresent) {
    if (course.status == "ended") {
      return numColsAlwaysPresent;
    } else {
      return numColsAlwaysPresent + 1;
    }
  };
}]);

app.controller('StaffController', ['$scope', 'commonData', function($scope, commonData) {
  $scope.deterministicWebColor = deterministicWebColor;

  commonData.fetchData().then(function(data) {
    $scope.staff = data.staff;
  });
}]);

app.controller('FAQController', ['$scope', 'commonData', function($scope, commonData) {
  commonData.fetchData().then(function(data) {
    $scope.faquestions = data.faquestions;
  });
}]);

app.controller('TestimonialController', ['$scope', 'commonData', function($scope, commonData) {
  $scope.deterministicBlueColor = deterministicBlueColor;

  commonData.fetchData().then(function(data) {
    $scope.testimonials = data.testimonials;
  });
}]);




