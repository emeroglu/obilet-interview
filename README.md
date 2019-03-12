# obilet-interview

# Backend Specs
Backend consits of four controllers

##### SiteController
Serves the client-side files

##### ProxyController
Since the assignment requires obilet API calls to remain on the backend-side, the very first approach would be implementing a simple proxy. ProxyController just redirects the incoming request to obilet API.

##### obiletController
The assignment is for evaluating C# skills, so ProxyController would be too easy. obiletController has more upon ProxyController, implementing some Json.Net. It is out of convention tough. It runs some Deserialize => Serialize => Deserialize => Serialize method.

##### AssignmentController
This controller is a subset of obilet controller that is only for this assignment's purposes. It has its own json structure where some unnecessary fields coming from obilet are omitted.

# Frontend Specs
Frontend does not use any library or frameworks.