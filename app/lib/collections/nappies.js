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
        allowedValues: ['Dry', 'Wet', 'Small Poo', 'Normal Poo', 'Poo Everywhere'],
    },
    createdAt: {
        type: Date,
        autoform: {
            type: "hidden",
            label: false
        },
        autoValue: function() {
          if (this.isInsert) {
            return new Date;
          } else if (this.isUpsert) {
            return {$setOnInsert: new Date};
          } else {
            this.unset();
          }
        }
    }
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
