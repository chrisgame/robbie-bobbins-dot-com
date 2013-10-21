import Service from 'appkit/models/service';

var ServicesRoute = Ember.Route.extend({
  model: function() {
    return Service.FIXTURES;
  }
});

export default ServicesRoute;

