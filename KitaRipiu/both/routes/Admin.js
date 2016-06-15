// Set the route group for admininstrator
const adminRoute  = FlowRouter.group({ name: 'admin', prefix: '/admin' });

adminRoute.route('/', {
  name   : 'Dashboard',
  action : renderView
});

adminRoute.route('/logout', {
  name   : 'Logout',
  action : renderView
});

adminRoute.route('/account', {
  name   : 'Account',
  action : renderView
});

// Passing router name
function renderView() {
  renderMainLayoutWith(this.name);
  console.log("[FlowRouter] params", this.name, FlowRouter._current.params);
}

// Render the router layouts
function renderMainLayoutWith(view) {
    BlazeLayout.render("AdminLayout", { main : view });
}
