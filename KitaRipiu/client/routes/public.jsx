const publicRoutes = FlowRouter.group({
  prefix  : '/',
  name    : 'public'
 });
const adminRoutes  = FlowRouter.group({
  prefix  : '/admin',
  name    : 'admin'
});

publicRoutes.route( '/login', {
  name: 'login',
  action() {
    console.log( "Okay, we're on the login page!" );
  }
});
