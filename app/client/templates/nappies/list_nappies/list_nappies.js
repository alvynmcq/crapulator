/*****************************************************************************/
/* ListNappies: Event Handlers */
/*****************************************************************************/
Template.ListNappies.events({
});

/*****************************************************************************/
/* ListNappies: Helpers */
/*****************************************************************************/
Template.ListNappies.helpers({
  nappies: function() {
    return Nappies.find();
  }
});

/*****************************************************************************/
/* ListNappies: Lifecycle Hooks */
/*****************************************************************************/
Template.ListNappies.onCreated(function () {
});

Template.ListNappies.onRendered(function () {
});

Template.ListNappies.onDestroyed(function () {
});
