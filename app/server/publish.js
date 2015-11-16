


Meteor.publish('nappies', function () {
  return Nappies.find();
});