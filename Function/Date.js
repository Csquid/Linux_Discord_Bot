exports.yyyymmdd = function() {
  var now = new Date();
  var y = now.getFullYear();
  var m = now.getMonth() + 1;
  var d = now.getDate();

  let year = y.toString();
  let month = (m < 10 ? "0" : "") + m;
  let day = (d < 10 ? "0" : "") + d;
  let yymmdd = year + "_" + month + "_" + day;
  // let hour = ;
  return yymmdd;
};
