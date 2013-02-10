var mesh = require("conway-hart")("C");
var grid = require("spatial-grid")(mesh, 0.5);
var faceNormals = require("normals").faceNormals(mesh.positions, mesh.faces);
var signedDistance = require("../index.js");

for(var x=0.0; x<1.0; x+=0.1) {
  console.log(signedDistance(grid, faceNormals, [x, 0, 0]));
}
