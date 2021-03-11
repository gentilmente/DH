/* var twirlTimer = (function() {
    var P = ["\\", "|", "/", "-"];
    var x = 0;
    return setInterval(function() {
      process.stdout.write("\r" + P[x++]);
      x &= 3;
    }, 250);
  })(); */

  var loading = (function() {
    var h = ['|', '/', '-', '\\'];
    var i = 0;
  
    return setInterval(() => {
      i = (i > 3) ? 0 : i;
      console.clear();
      console.log(h[i]);
      i++;
    }, 300);
  })();