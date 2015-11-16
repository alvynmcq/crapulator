Nappies = new Mongo.Collection('nappies');

Nappies.attachSchema(new SimpleSchema({
    baby: {
        type: String,
        label: "Name",
        max: 100
    },
    nappytype: {
        type: String,
        label: "Nappy Type",
        allowedValues: ['Wet', 'Small Poo', 'Normal Poo', 'Holy Fuck Poo'],
    },
}));

if (Meteor.isServer) {
  Nappies.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
}
