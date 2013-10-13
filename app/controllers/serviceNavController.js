var ServiceNavController = Ember.ObjectController.extend({
  mailToLink: function() {
    return 'mailto:'+this.get('email');
  }.property('email')
});

