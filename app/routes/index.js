var IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('services');
  }
});

export default IndexRoute;
