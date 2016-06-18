// Set the route group for public users
const publicRoute = FlowRouter.group({ name: 'public' });

// Home route
publicRoute.route('/', {
  name  : 'Home',
  action: renderView
});

// Smartphone route
publicRoute.route('/smartphone', {
  name  : 'Smartphone',
  action: renderView
});

// Versus route
publicRoute.route('/versus/:smartphone', {
  name  : 'Versus',
  action: renderView
});

// Review route
publicRoute.route('/review', {
  name  : 'Review',
  action: renderView
});

// News route
publicRoute.route('/news', {
  name  : 'News',
  action: renderView
});

// Read article route
publicRoute.route('/read/:article', {
  name  : 'Read',
  action: renderView
});

// Login route
publicRoute.route('/login', {
  name  : 'Login',
  action: renderView
});

// Passing router name
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
