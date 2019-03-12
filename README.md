# obilet-interview

# Backend Specs
Backend consists of four controllers

##### SiteController
Serves the client-side files

##### ProxyController
Since the assignment requires obilet API calls to remain on the backend-side, the very first approach would be implementing a simple proxy. ProxyController just redirects the incoming request to obilet API.

##### obiletController
The assignment is for evaluating C# skills, so ProxyController would be too easy. obiletController has more upon ProxyController, implementing some Json.Net. It is out of convention tough. It runs some Deserialize => Serialize => Deserialize => Serialize method.

##### AssignmentController
This controller is a subset of obilet controller that is only for this assignment's purposes. It has its own json structure where some unnecessary fields coming from obilet are omitted.

# Frontend Specs
Frontend does not use any library or frameworks. It has its own framework where some C#-style inheritance and access-modifiers are implemented. It lacks ListView performance. ListView needs to implement Android's RecyclerView or Ionic's infinite scroll. That's due later for some other project.

# obilet.json
obilet.json is a postman collection.