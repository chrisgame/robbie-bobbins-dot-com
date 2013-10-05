App = Ember.Application.create();

//Router
App.Router.map(function(){
  this.resource('services', function() {
    this.resource('service', { path: ':service_id' });
  });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('services');
  }
});

App.ServicesRoute = Ember.Route.extend({
  model: function() {
    return App.Service.find();
  }
});

//Views
App.CarouselItemView = Ember.View.extend({
  templateName: 'carouselItem',
  classNames: ['carousel', 'slide'],
  init: function() {
    this._super.apply(this, arguments);
    $(document).off('data-api');

    var obj = this.get('content.firstObject');
    Ember.set(obj, 'isactive', true);
  },
  previousSlide: function(){
    this.$().carousel('prev');
  },
  nextSlide: function(){
    this.$().carousel('next');
  },
  didInsertElement: function(){
    this.$().carousel();
  },
  indicatorsView: Ember.CollectionView.extend({
    tagName: 'ol',
    classNames: ['carousel-indicators'],
    contentBinding: 'parentView.content',
    itemViewClass: Ember.View.extend({
      click: function() {
        var $elem = this.get("parentView.parentView").$();
        $elem.carousel(this.get("contentIndex"));
      },
      template: Ember.Handlebars.compile(''),
      classNameBindings: ['content.isActive:active']
    })
  }),
  itemsView: Ember.CollectionView.extend({
    classNames: ['carousel-inner'],
    contentBinding: 'parentView.content',
    itemViewClass: Ember.View.extend({
      classNames: ['item'],
      classNameBindings: ['content.isActive:active'],
      template: Ember.Handlebars.compile('\
        <img {{bindAttr src="view.content.imageUrl"}} alt=""/>\
        <div class="carousel-caption">\
          <p>{{view.content.description}}</p>\
        </div>')
    })
  })
});

//Controllers
App.ServiceNavController = Ember.ObjectController.extend({
  mailToLink: function() {
    return 'mailto:'+this.get('email')
  }.property('email')
});

//Models
App.Store = DS.Store.extend({
  revision: 13,
  adapter: DS.FixtureAdapter.create()
});

App.Service = DS.Model.extend({
  name: DS.attr('string'),
  summary: DS.attr('string'),
  email: DS.attr('string'),
  carouselItems: DS.hasMany('App.CarouselItem')
});

App.CarouselItem = DS.Model.extend({
  service: DS.belongsTo('App.Service'),
  imageUrl: DS.attr('string'),
  description: DS.attr('string')
});

//Fixtures
App.Service.FIXTURES = [{
  id: 1,
  name: 'Photography',
  summary: 'High quality photos taken under as little or large amount of direction that you require',
  email: 'photography@robbiebobbins.com',
  carouselItems: [101, 102]
},
{
  id: 2,
  name: 'Development',
  summary: 'Bespoke websites built for you or your business',
  email: 'development@robbiebobbins.com',
  carouselItems: [201]
},
{
  id: 3,
  name: 'Coaching',
  summary: 'Coaching of development teams and product owners',
  email: 'coaching@robbiebobbins.com',
  carouselItems: [301]
},
{
  id: 4,
  name: 'Data Visualisation',
  summary: 'Having problems getting your data to make an impact? We can help!',
  email: 'datavisualisation@robbiebobbins.com',
  carouselItems: [401]
}];

App.CarouselItem.FIXTURES = [{
  id: 101,
  imageUrl: 'images/photography/1.jpg',
  description: 'Arcitechture',
},
{ 
  id: 102,
  imageUrl: 'images/photography/2.jpg',
  description: 'Landscapes',
},
{
  id: 201,
  imageUrl: 'images/development/1.jpg',
  description: '',
},
{
  id: 301,
  imageUrl: 'images/coaching/1.jpg',
  description: '',
},
{
  id: 401,
  imageUrl: 'images/data_visualisation/1.jpg',
  description: '',
}]
