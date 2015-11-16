Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home'
});

Router.route('/nappies/create', {
  name: 'createNappy',
  controller: 'NappiesController',
  action: 'create',
  where: 'client'
});

Router.route('/nappies', {
  name: 'nappiesList',
  controller: 'NappiesController',
  action: 'list',
  where: 'client'
});

Router.route('/nappies/:_id', {
  name: 'editNappy',
  controller: 'NappiesController',
  action: 'edit',
  where: 'client'
});
