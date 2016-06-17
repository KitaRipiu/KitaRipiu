Template.AdminNavSection.helpers({

  DashboardStatusRoute : function(){
    let CurrentRoute = FlowRouter.getRouteName();
    if(CurrentRoute == 'Dashboard') {
      return 'active';
    } else {
      return '';
    }
  },

  AddPhoneStatusRoute : function(){
    let CurrentRoute = FlowRouter.getRouteName();
    if(CurrentRoute == 'AddPhone' || CurrentRoute == 'AllPhone' ) {
      return 'active';
    } else {
      return '';
    }
  },

  AddArticleStatusRoute : function(){
    let CurrentRoute = FlowRouter.getRouteName();
    if(CurrentRoute == 'AddArticle') {
      return 'active';
    } else {
      return '';
    }
  },
  
});
