/*****************************************************************************/
/* ListNappies: Event Handlers */
/*****************************************************************************/
Template.ListNappies.events({
  'click .reactive-table tbody tr': function (event) {
    event.preventDefault();
    var post = this;
    // checks if the actual clicked element has the class `delete`
    if (event.target.className == "delete") {
      Posts.remove(post._id)
    }
  }
});

/*****************************************************************************/
/* ListNappies: Helpers */
/*****************************************************************************/
Template.ListNappies.helpers({
  nappies: function() {
    return Nappies.find();
  },
  formatDate: function(date) {
    return moment(date).format('DD-MM-YYYY');
  },
  settings: function () {
        return {
            collection: Nappies,
            rowsPerPage: 10,
            showFilter: false,
            fields: [
              { key: 'baby', label: 'Name' },
              { key: 'nappytype', label: 'Nappy Status' },
              { key: 'createdAt', label: 'Date', fn: function(date) { return moment(date).format('DD-MM-YYYY')} },
              { key: 'createdAt', label: 'Time', fn: function(date) { return moment(date).format('HH-mm')} }
            ]};
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
