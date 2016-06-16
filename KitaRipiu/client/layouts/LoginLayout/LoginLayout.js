Template.LoginLayout.helpers({

    create: function() {
    },
    // Get the form instance once the template loaded
    rendered: function() {
        LoginLayout({
            form: '#login-form',
            template: Template.instance()
        });
    },
    destroyed: function() {

    },
});

// Catch the event when form has been submitted
Template.LoginLayout.events({
    // Process the submit event
    'submit form': (event, template) => {

        event.preventDefault();

        // Get the input form value
        let emailVar = event.target.email.value;
        let passVar = event.target.password.value;

        Meteor.loginWithPassword(emailVar, passVar, (error) => {
            if ( error ) {
                console.log(error);
                template.$('#LoginErrorMessage').addClass('visible');
                template.$('#LoginErrorMessage').html(error.reason);
            }
            else {
                FlowRouter.go('/admin');
            }


        });
    }
});
