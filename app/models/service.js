var Service = DS.Model.extend({
  name: DS.attr('string'),
  summary: DS.attr('string'),
  email: DS.attr('string'),
  carouselItems: DS.hasMany('App.CarouselItem')
});

Service.FIXTURES = [{
  id: 1,
  name: 'Photography',
  summary: 'High quality photos taken under as little or large amount of direction that you require',
  email: 'photography@robbiebobbins.com',
  carouselItems: [101,102]
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
  carouselItem: [401]
}];

export default Service; 
