var numeric = require("numeric");
var EPSILON = 1e-6;

module.exports = function(grid, faceNormals, x) {
  var result = grid.closestCells(x);
  if(!result) {
    return Number.NaN;
  }
  var d = numeric.sub(x, result.points[0]);
  var l = numeric.norm2(d);
  if(l < EPSILON) {
    return 0.0;
  }
  numeric.muleq(d, 1.0 / Math.sqrt(l));
  var cells = result.cells;
  var best_n = 0.0;
  for(var i=0; i<cells.length; ++i) {
    var n = faceNormals[cells[i]];
    var w = numeric.dot(n, d);
    if(Math.abs(w) > Math.abs(best_n)) {
      best_n = w;
    }
  }
  if(best_n < 0) {
    return -result.distance;
  }
  return result.distance;
}
