var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function(){
  this.resource('services', function() {
    this.resource('service', { path: ':service_id' });
  });
});

export default Router;
