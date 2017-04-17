import { Meteor } from 'meteor/meteor';
// This function allows the database to be shown in client side, as long the
// client calls a subscribe method.
Meteor.publish('Lists', () => {
  return Lists.find();
});

Meteor.startup(() => {
  // code to run on server at startup
});
