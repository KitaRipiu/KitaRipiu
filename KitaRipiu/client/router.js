// Set the route group for public users
const publicRoute = FlowRouter.group({ name: 'public' });

// Set the route group for admininstrator
const adminRoute  = FlowRouter.group({ name: 'admin', prefix: '/admin' });

// Home route
publicRoute.route('/',
  { name: 'Home',       action: renderView });
// Smartphone route
publicRoute.route('/smartphone',
  { name: 'Smartphone', action: renderView });
// Read article route
publicRoute.route('/read/:article',
  { name: 'Read',       action: renderView });
// Login route
publicRoute.route('/login',
  { name: 'Login',      action: renderView });

function renderView() {
  renderMainLayoutWith(this.name);
  console.log("[FlowRouter] params", this.name, FlowRouter._current.params);
}

// Render the router layouts
function renderMainLayoutWith(view) {
  if(view == 'Login'){
    BlazeLayout.render("LoginLayout");
  } else {
    BlazeLayout.render("PublicLayout", {main : view});
  }
}
