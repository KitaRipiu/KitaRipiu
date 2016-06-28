Template.AdminLayout.helpers({
    roleStatus: () => {
        if(Meteor.users.findOne({
            _id: Meteor.userId(),
            "roles": {
                "default-group": ["admin"]
            }
        })) {
            return 'admin';
        } else {
            FlowRouter.go('/login');
            return 'unauthenticated';
        }
    }
});
