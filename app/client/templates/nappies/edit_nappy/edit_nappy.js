/*****************************************************************************/
/* EditNappy: Event Handlers */
/*****************************************************************************/
Template.EditNappy.events({
});

/*****************************************************************************/
/* EditNappy: Helpers */
/*****************************************************************************/
Template.EditNappy.helpers({
  beforeRemove: function() {
    return function(collection, id) {
      var doc = collection.findOne(id);
      if (confirm('Really delete nappy: "' + doc.baby + " " + doc.nappytype + '"?')) {
        this.remove();
        Router.go('nappiesList');
      }
    };
  }
});

/*****************************************************************************/
/* EditNappy: Lifecycle Hooks */
/*****************************************************************************/
Template.EditNappy.onCreated(function () {
});

Template.EditNappy.onRendered(function () {
});

Template.EditNappy.onDestroyed(function () {
});
