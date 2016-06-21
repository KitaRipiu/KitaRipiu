// 404 Page
FlowRouter.notFound = {
  action: function(){
    BlazeLayout.render("NotFound");
  }
};

FlowRouter.route('/404', {
  action: () => {
    BlazeLayout.render("NotFound");
  }
});
