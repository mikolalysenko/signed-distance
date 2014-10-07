signed-distance
===============
Signed distance field computations for meshes

Usage & Install
===============
Via npm:

    npm install signed-distance

Here is how you can use it:

```js
    var mesh = require("bunny");
    var dist = require("signed-distance")(
                  require("spatial-grid")(mesh.cells, mesh.positions, 0.1), 
                  require("normals").faceNormals(mesh.cells, mesh.positions),
                  [1.0, 0.0, 0.0]);
```                  

`require("signed-distance")(grid, faceNormals, point)`
------------------------------------------------------
Computes the signed distance to the mesh from `point`

* `grid`: A spatial grid
* `faceNormals`: The normals of the mesh
* `point`: The point to query

Returns: The signed distance to the boundary of the mesh, or else NaN

Credit
======
(c) 2013 Mikola Lysenko. BSD
