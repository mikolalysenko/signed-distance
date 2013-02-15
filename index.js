var numeric = require("numeric");
var EPSILON = 1e-6;

function signedDistance(grid, faceNormals, x) {
  var result = grid.closestCells(x);
  if(!result) {
    return Number.NaN;
  }
  if(result.distance < EPSILON) {
    return 0.0;
  }
  var best_n = 0.0;
  var polarity = false;
  var cells = result.cells;
  var points = result.points;
  for(var i=0; i<cells.length; ++i) {
    var l = 0.0;
    var n = 0.0;
    var p = points[i];
    var fn = faceNormals[cells[i]];
    for(var j=0; j<x.length; ++j) {
      var d = p[j] - x[j];
      l += d * d;
      n += fn[j] * d;
    }
    n /= Math.sqrt(l);
    if(n < 0) {
      n = -n;
      if(n > best_n) {
        best_n = n;
        polarity = true;
      }
    } else if(n > best_n) {
      best_n = n;
      polarity = false;
    }
  }
  var r = Math.sqrt(result.distance);
  return polarity ? r : -r;
}
module.exports = signedDistance;

