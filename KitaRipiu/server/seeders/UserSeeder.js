if (Meteor.users.findOne({
        "emails": [{
            "address": "admin@kitaripiu.com",
            "verified": false
        }]
    }) == null) {


    let id = Accounts.createUser({
        email: 'admin@kitaripiu.com',
        password: 'admin123'
    });

    Roles.addUsersToRoles(id, ['admin'], 'default-group');

}
