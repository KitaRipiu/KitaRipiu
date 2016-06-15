Template.FixedMainMenu.helpers({

  HomeStatusRoute : function(){
    var CurrentRoute = FlowRouter.getRouteName();
    if(CurrentRoute == 'Home') {
      return 'active';
    } else {
      return '';
    }
  },
  SmartphoneStatusRoute : function(){
    var CurrentRoute = FlowRouter.getRouteName();
    if(CurrentRoute == 'Smartphone') {
      return 'active';
    } else {
      return '';
    }
  }
});
