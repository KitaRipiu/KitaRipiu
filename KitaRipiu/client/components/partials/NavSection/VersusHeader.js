Template.VersusHeader.helpers({
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },
});

Template.VersusHeader.events({
  "submit form": function(event, template){
    event.preventDefault();

    console.log('click');

    let Product_1 = event.target.product_1.value;
    let Product_2 = event.target.product_2.value;


    FlowRouter.go('/versus/' + Product_1 + '-' + Product_2);
    // BlazeLayout.render('PublicLayout', { main: 'Versus' });
  }
});
