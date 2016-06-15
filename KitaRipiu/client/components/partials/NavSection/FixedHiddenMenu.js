Template.FixedHiddenMenu.helpers({

  HomeStatusRoute : function(){
    let CurrentRoute = FlowRouter.getRouteName();
    if(CurrentRoute == 'Home') {
      return 'active';
    } else {
      return '';
    }
  },
  SmartphoneStatusRoute : function(){
    let CurrentRoute = FlowRouter.getRouteName();
    if(CurrentRoute == 'Smartphone') {
      return 'active';
    } else {
      return '';
    }
  }
});
