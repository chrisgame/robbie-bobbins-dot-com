var ServicesRoute = Ember.Route.extend({
  model: function() {
    return this.service.find();
  }
});

export default ServicesRoute;

