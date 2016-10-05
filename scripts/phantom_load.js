var page = require('webpage').create();
page.open('http://adaandleo.com/index.html', function(status) {
  //console.log("Status: " + status);
  if(status === "success") {
    console.log(page.content);
  }
  phantom.exit();
});
