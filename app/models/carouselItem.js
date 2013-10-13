var CarouselItem = DS.Model.extend({
  service: DS.belongsTo('App.Service'),
  imageUrl: DS.attr('string'),
  description: DS.attr('string')
});

CarouselItem.FIXTURES = [{
  id: 101,
  imageUrl: 'images/photography/1.jpg',
  description: 'Architechture',
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
}];

export default CarouselItem;
