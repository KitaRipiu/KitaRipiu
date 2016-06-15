Users = new Mongo.Collection("Users");

Users.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Users.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

UserSchema = new SimpleSchema({

  _id : {
    type  : String,
    label : 'UserID'
  },
  username : {
    type  : String,
    label : 'Username'
  },
  email : {
    type  : String,
    label : 'Email'
  },
  password : {
    type  : String,
    label : 'Password'
  },
  created : {
    type  : Date,
    label : "Date Created",
    autoValue : () => {
      if( this.isInsert ) {
        return new Date;
      }
    }
  }

});

Users.attachSchema(UserSchema);
