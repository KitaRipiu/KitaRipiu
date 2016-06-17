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
    if(CurrentRoute == 'AddPhone' || CurrentRoute == 'AllPhone' || CurrentRoute == 'EditPhone' ) {
      return 'active';
    } else {
      return '';
    }
  },

  AddArticleStatusRoute : function(){
    let CurrentRoute = FlowRouter.getRouteName();
    if(CurrentRoute == 'AddArticle' || CurrentRoute == 'AllArticle' || CurrentRoute == 'EditArticle') {
      return 'active';
    } else {
      return '';
    }
  },
  
});
